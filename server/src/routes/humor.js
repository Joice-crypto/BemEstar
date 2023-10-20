"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humorRoutes = void 0;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function humorRoutes(app) {
    app.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    });
    app.get('/humor', async (request) => {
        const humor = await prisma_1.prisma.humor.findMany({
            where: {
                usuarioId: request.user.sub,
            },
            orderBy: {
                id: 'asc',
            },
        });
        return humor;
    });
    app.get('/humor/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const humor = await prisma_1.prisma.humor.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (humor.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return humor;
    });
    app.post('/humor', async (request) => {
        const bodySchema = zod_1.z.object({
            quando: zod_1.z.coerce.date(),
            humor: zod_1.z.number(),
        });
        const { quando, humor } = bodySchema.parse(request.body);
        const humor2 = await prisma_1.prisma.humor.create({
            data: {
                quando,
                humor,
                usuarioId: request.user.sub,
            },
        });
        return humor2;
    });
    app.put('/humor/edit/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const bodySchema = zod_1.z.object({
            quando: zod_1.z.coerce.date(),
            humor: zod_1.z.number(),
        });
        const { quando, humor } = bodySchema.parse(request.body);
        const humor2 = await prisma_1.prisma.humor.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (humor2.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        const humorr = await prisma_1.prisma.humor.update({
            where: {
                id,
            },
            data: {
                quando,
                humor,
            },
        });
        return humorr;
    });
    app.delete('/humor/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const humor = await prisma_1.prisma.humor.findUniqueOrThrow({
            where: {
                id,
            },
        });
        await prisma_1.prisma.humor.delete({
            where: { id },
        });
        if (humor.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return humor;
    });
}
exports.humorRoutes = humorRoutes;
