import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastifyMultipart from '@fastify/multipart'
import { alimentacaoRoutes } from './routes/alimentacao'
import { atividadesFisicasRoutes } from './routes/atividadeFisicas'
import { humorRoutes } from './routes/humor'
import { sonoRoutes } from './routes/sono'
import { authRoute } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(fastifyMultipart)

app.register(jwt, {
  secret: 'ufsj',
})

app.register(cors, {
  origin: true,
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(authRoute)
app.register(uploadRoutes)
app.register(sonoRoutes)
app.register(alimentacaoRoutes)
app.register(humorRoutes)
app.register(atividadesFisicasRoutes)

app.listen({ port: 8080, host: '0.0.0.0' }).then(() => {
  console.log('Server is runing')
})
