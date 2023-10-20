"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alimentacaoRoutes = void 0;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function alimentacaoRoutes(app) {
    app.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    });
    app.get('/alimentacao', async (request) => {
        const alimentacao = await prisma_1.prisma.alimentacao.findMany({
            where: {
                usuarioId: request.user.sub,
            },
            orderBy: {
                id: 'asc',
            },
        });
        return alimentacao;
    });
    app.get('/alimentacao/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const alimentacao = await prisma_1.prisma.alimentacao.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (alimentacao.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return alimentacao;
    });
    app.post('/alimentacao', async (request) => {
        const bodySchema = zod_1.z.object({
            quando: zod_1.z.coerce.date(),
            nome: zod_1.z.string(),
            fotoUrl: zod_1.z.string().url(),
        });
        const { quando, nome, fotoUrl } = bodySchema.parse(request.body);
        const alimentacao = await prisma_1.prisma.alimentacao.create({
            data: {
                quando,
                nome,
                fotoUrl,
                usuarioId: request.user.sub,
            },
        });
        return alimentacao;
    });
    app.put('/alimentacao/edit/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const bodySchema = zod_1.z.object({
            quando: zod_1.z.coerce.date(),
            nome: zod_1.z.string(),
            fotoUrl: zod_1.z.string(),
        });
        const { quando, nome, fotoUrl } = bodySchema.parse(request.body);
        const aliementacao = await prisma_1.prisma.alimentacao.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (aliementacao.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        const alimentacao2 = await prisma_1.prisma.alimentacao.update({
            where: {
                id,
            },
            data: {
                nome,
                quando,
                fotoUrl,
            },
        });
        return alimentacao2;
    });
    app.delete('/alimentacao/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const aliementacao = await prisma_1.prisma.alimentacao.findUniqueOrThrow({
            where: {
                id,
            },
        });
        await prisma_1.prisma.alimentacao.delete({
            where: { id },
        });
        if (aliementacao.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return aliementacao;
    });
}
exports.alimentacaoRoutes = alimentacaoRoutes;
