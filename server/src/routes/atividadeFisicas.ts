import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { request } from 'http'

export async function atividadesFisicasRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/atividades', async (request) => {
    const atividadeF = await prisma.atividadeFisica.findMany({
      where: {
        usuarioId: request.user.sub,
      },
      orderBy: {
        id: 'asc',
      },
    })
    return atividadeF
  })

  app.get('/atividades/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)
    const atividadeF = await prisma.atividadeFisica.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (atividadeF.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    return atividadeF
  })

  app.post('/atividades', async (request) => {
    const bodySchema = z.object({
      nome: z.string(),
      quando: z.coerce.date(),
      descricao: z.string(),
    })

    const { nome, quando, descricao } = bodySchema.parse(request.body)
    const atividadeF = await prisma.atividadeFisica.create({
      data: {
        nome,
        quando,
        descricao,
        usuarioId: request.user.sub,
      },
    })
    return atividadeF
  })

  app.put('/atividades/edit/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const bodySchema = z.object({
      nome: z.string(),
      quando: z.coerce.date(),
      descricao: z.string(),
    })

    const { nome, quando, descricao } = bodySchema.parse(request.body)

    const atividadeF = await prisma.atividadeFisica.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (atividadeF.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    const atividadeFisica = await prisma.atividadeFisica.update({
      where: {
        id,
      },
      data: {
        nome,
        quando,
        descricao,
      },
    })
    return atividadeFisica
  })

  app.delete('/atividades/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const atividadeF = await prisma.atividadeFisica.findUniqueOrThrow({
      where: {
        id,
      },
    })
    await prisma.atividadeFisica.delete({
      where: { id },
    })

    if (atividadeF.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    return atividadeF
  })
}
