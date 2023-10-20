import { FastifyInstance } from 'fastify'
import { date, z } from 'zod'
import axios from 'axios'
import { prisma } from '../lib/prisma'

export async function authRoute(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodyShema = z.object({
      code: z.string(),
    })

    const { code } = bodyShema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const userShema = z.object({
      id: z.number(),
      created_at: z.string(),
      name: z.string(),
    })

    const userInfo = userShema.parse(userResponse.data)

    let usuario = await prisma.usuario.findUnique({
      where: {
        githubId: userInfo.id,
      },
    })

    if (!usuario) {
      usuario = await prisma.usuario.create({
        data: {
          githubId: userInfo.id,
          nome: userInfo.name,
          createdAt: userInfo.created_at,
        },
      })
    }

    const token = app.jwt.sign(
      {
        name: usuario.nome,
      },
      {
        sub: usuario.id,
        expiresIn: '30 days',
      },
    )

    return {
      token,
    }
  })
}
