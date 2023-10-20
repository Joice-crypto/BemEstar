"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const zod_1 = require("zod");
const axios_1 = __importDefault(require("axios"));
const prisma_1 = require("../lib/prisma");
async function authRoute(app) {
    app.post('/register', async (request) => {
        const bodyShema = zod_1.z.object({
            code: zod_1.z.string(),
        });
        const { code } = bodyShema.parse(request.body);
        const accessTokenResponse = await axios_1.default.post('https://github.com/login/oauth/access_token', null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                Accept: 'application/json',
            },
        });
        const { access_token } = accessTokenResponse.data;
        const userResponse = await axios_1.default.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const userShema = zod_1.z.object({
            id: zod_1.z.number(),
            created_at: zod_1.z.string(),
            name: zod_1.z.string(),
        });
        const userInfo = userShema.parse(userResponse.data);
        let usuario = await prisma_1.prisma.usuario.findUnique({
            where: {
                githubId: userInfo.id,
            },
        });
        if (!usuario) {
            usuario = await prisma_1.prisma.usuario.create({
                data: {
                    githubId: userInfo.id,
                    nome: userInfo.name,
                    createdAt: userInfo.created_at,
                },
            });
        }
        const token = app.jwt.sign({
            name: usuario.nome,
        }, {
            sub: usuario.id,
            expiresIn: '30 days',
        });
        return {
            token,
        };
    });
}
exports.authRoute = authRoute;
