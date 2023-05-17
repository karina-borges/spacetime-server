import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  // TODO: change this to the domain of the frontend app
  // origin: ['http://localhost:3000'],
  origin: true,
})

app.register(memoriesRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Server is running on port 3333')
})
