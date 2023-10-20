import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function sonoRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/sono', async (request) => {
    const sono = await prisma.sono.findMany({
      where: {
        usuarioId: request.user.sub,
      },
      orderBy: {
        id: 'asc',
      },
    })
    return sono
  })

  app.get('/sono/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)
    const sono = await prisma.sono.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (sono.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    return sono
  })

  app.post('/sono', async (request) => {
    const bodySchema = z.object({
      avaliacao: z.coerce.number(),
      inicio: z.coerce.date(),
      fim: z.coerce.date(),
    })

    const { avaliacao, inicio, fim } = bodySchema.parse(request.body)
    const sono = await prisma.sono.create({
      data: {
        avaliacao,
        inicio,
        fim,
        usuarioId: request.user.sub,
      },
    })
    return sono
  })

  app.put('/sono/edit/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const bodySchema = z.object({
      avaliacao: z.coerce.number(),
      inicio: z.coerce.date(),
      fim: z.coerce.date(),
    })

    const { avaliacao, inicio, fim } = bodySchema.parse(request.body)

    const sono = await prisma.sono.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (sono.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    const sono2 = await prisma.sono.update({
      where: {
        id,
      },
      data: {
        fim,
        inicio,
        avaliacao,
      },
    })
    return sono2
  })

  app.delete('/sono/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const sono = await prisma.sono.findUniqueOrThrow({
      where: {
        id,
      },
    })
    await prisma.sono.delete({
      where: { id },
    })

    if (sono.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    return sono
  })
}
