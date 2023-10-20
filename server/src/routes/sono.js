"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonoRoutes = void 0;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function sonoRoutes(app) {
    app.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    });
    app.get('/sono', async (request) => {
        const sono = await prisma_1.prisma.sono.findMany({
            where: {
                usuarioId: request.user.sub,
            },
            orderBy: {
                id: 'asc',
            },
        });
        return sono;
    });
    app.get('/sono/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const sono = await prisma_1.prisma.sono.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (sono.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return sono;
    });
    app.post('/sono', async (request) => {
        const bodySchema = zod_1.z.object({
            avaliacao: zod_1.z.coerce.number(),
            inicio: zod_1.z.coerce.date(),
            fim: zod_1.z.coerce.date(),
        });
        const { avaliacao, inicio, fim } = bodySchema.parse(request.body);
        const sono = await prisma_1.prisma.sono.create({
            data: {
                avaliacao,
                inicio,
                fim,
                usuarioId: request.user.sub,
            },
        });
        return sono;
    });
    app.put('/sono/edit/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const bodySchema = zod_1.z.object({
            avaliacao: zod_1.z.coerce.number(),
            inicio: zod_1.z.coerce.date(),
            fim: zod_1.z.coerce.date(),
        });
        const { avaliacao, inicio, fim } = bodySchema.parse(request.body);
        const sono = await prisma_1.prisma.sono.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (sono.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        const sono2 = await prisma_1.prisma.sono.update({
            where: {
                id,
            },
            data: {
                fim,
                inicio,
                avaliacao,
            },
        });
        return sono2;
    });
    app.delete('/sono/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const sono = await prisma_1.prisma.sono.findUniqueOrThrow({
            where: {
                id,
            },
        });
        await prisma_1.prisma.sono.delete({
            where: { id },
        });
        if (sono.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return sono;
    });
}
exports.sonoRoutes = sonoRoutes;
