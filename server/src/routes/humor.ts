import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { request } from 'http'

export async function humorRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.get('/humor', async (request) => {
    const humor = await prisma.humor.findMany({
      where: {
        usuarioId: request.user.sub,
      },
      orderBy: {
        id: 'asc',
      },
    })
    return humor
  })

  app.get('/humor/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)
    const humor = await prisma.humor.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (humor.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    return humor
  })

  app.post('/humor', async (request) => {
    const bodySchema = z.object({
      quando: z.coerce.date(),
      humor: z.number(),
    })

    const { quando, humor } = bodySchema.parse(request.body)
    const humor2 = await prisma.humor.create({
      data: {
        quando,
        humor,
        usuarioId: request.user.sub,
      },
    })
    return humor2
  })

  app.put('/humor/edit/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const bodySchema = z.object({
      quando: z.coerce.date(),
      humor: z.number(),
    })

    const { quando, humor } = bodySchema.parse(request.body)

    const humor2 = await prisma.humor.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (humor2.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }

    const humorr = await prisma.humor.update({
      where: {
        id,
      },
      data: {
        quando,
        humor,
      },
    })
    return humorr
  })

  app.delete('/humor/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const humor = await prisma.humor.findUniqueOrThrow({
      where: {
        id,
      },
    })
    await prisma.humor.delete({
      where: { id },
    })

    if (humor.usuarioId !== request.user.sub) {
      return reply.status(401).send()
    }
    return humor
  })
}
