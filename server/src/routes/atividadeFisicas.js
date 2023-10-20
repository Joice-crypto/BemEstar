"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atividadesFisicasRoutes = void 0;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function atividadesFisicasRoutes(app) {
    app.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    });
    app.get('/atividades', async (request) => {
        const atividadeF = await prisma_1.prisma.atividadeFisica.findMany({
            where: {
                usuarioId: request.user.sub,
            },
            orderBy: {
                id: 'asc',
            },
        });
        return atividadeF;
    });
    app.get('/atividades/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const atividadeF = await prisma_1.prisma.atividadeFisica.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (atividadeF.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return atividadeF;
    });
    app.post('/atividades', async (request) => {
        const bodySchema = zod_1.z.object({
            nome: zod_1.z.string(),
            quando: zod_1.z.coerce.date(),
            descricao: zod_1.z.string(),
        });
        const { nome, quando, descricao } = bodySchema.parse(request.body);
        const atividadeF = await prisma_1.prisma.atividadeFisica.create({
            data: {
                nome,
                quando,
                descricao,
                usuarioId: request.user.sub,
            },
        });
        return atividadeF;
    });
    app.put('/atividades/edit/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const bodySchema = zod_1.z.object({
            nome: zod_1.z.string(),
            quando: zod_1.z.coerce.date(),
            descricao: zod_1.z.string(),
        });
        const { nome, quando, descricao } = bodySchema.parse(request.body);
        const atividadeF = await prisma_1.prisma.atividadeFisica.findUniqueOrThrow({
            where: {
                id,
            },
        });
        if (atividadeF.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        const atividadeFisica = await prisma_1.prisma.atividadeFisica.update({
            where: {
                id,
            },
            data: {
                nome,
                quando,
                descricao,
            },
        });
        return atividadeFisica;
    });
    app.delete('/atividades/:id', async (request, reply) => {
        const paramsSchema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = paramsSchema.parse(request.params);
        const atividadeF = await prisma_1.prisma.atividadeFisica.findUniqueOrThrow({
            where: {
                id,
            },
        });
        await prisma_1.prisma.atividadeFisica.delete({
            where: { id },
        });
        if (atividadeF.usuarioId !== request.user.sub) {
            return reply.status(401).send();
        }
        return atividadeF;
    });
}
exports.atividadesFisicasRoutes = atividadesFisicasRoutes;
