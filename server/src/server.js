"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
require("dotenv/config");
const multipart_1 = __importDefault(require("@fastify/multipart"));
const alimentacao_1 = require("./routes/alimentacao");
const atividadeFisicas_1 = require("./routes/atividadeFisicas");
const humor_1 = require("./routes/humor");
const sono_1 = require("./routes/sono");
const auth_1 = require("./routes/auth");
const upload_1 = require("./routes/upload");
const node_path_1 = require("node:path");
const app = (0, fastify_1.fastify)();
app.register(multipart_1.default);
app.register(jwt_1.default, {
    secret: 'ufsj',
});
app.register(cors_1.default, {
    origin: true,
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.register(require('@fastify/static'), {
    root: (0, node_path_1.resolve)(__dirname, '../uploads'),
    prefix: '/uploads',
});
app.register(auth_1.authRoute);
app.register(upload_1.uploadRoutes);
app.register(sono_1.sonoRoutes);
app.register(alimentacao_1.alimentacaoRoutes);
app.register(humor_1.humorRoutes);
app.register(atividadeFisicas_1.atividadesFisicasRoutes);
app.listen({ port: 8080, host: 'https://clownfish-app-3x9ir.ondigitalocean.app/bemestar-server/' }).then(() => {
    console.log('Server is runing');
});
