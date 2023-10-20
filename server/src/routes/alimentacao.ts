import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { request } from 'http'

export async function alimentacaoRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/alimentacao', async (request) => {
    const alimentacao = await prisma.alimentacao.findMany({
      where: {
        usuarioId: request.user.sub,
      },
      orderBy: {
        id: 'asc',
      },
    })
    return alimentacao
  })

  app.get('/alimentacao/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)
    const alimentacao = await prisma.alimentacao.findUniqueOrThrow({
      where: {
        id,
      },
    })
    if (alimentacao.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    return alimentacao
  })

  app.post('/alimentacao', async (request) => {
    const bodySchema = z.object({
      quando: z.coerce.date(),
      nome: z.string(),
      fotoUrl: z.string().url(),
    })

    const { quando, nome, fotoUrl } = bodySchema.parse(request.body)
    const alimentacao = await prisma.alimentacao.create({
      data: {
        quando,
        nome,
        fotoUrl,
        usuarioId: request.user.sub,
      },
    })
    return alimentacao
  })

  app.put('/alimentacao/edit/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const bodySchema = z.object({
      quando: z.coerce.date(),
      nome: z.string(),
      fotoUrl: z.string(),
    })

    const { quando, nome, fotoUrl } = bodySchema.parse(request.body)

    const aliementacao = await prisma.alimentacao.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (aliementacao.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    const alimentacao2 = await prisma.alimentacao.update({
      where: {
        id,
      },
      data: {
        nome,
        quando,
        fotoUrl,
      },
    })

    return alimentacao2
  })

  app.delete('/alimentacao/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const aliementacao = await prisma.alimentacao.findUniqueOrThrow({
      where: {
        id,
      },
    })
    await prisma.alimentacao.delete({
      where: { id },
    })

    if (aliementacao.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    return aliementacao
  })
}
