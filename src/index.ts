import express from 'express'

import products from './routes/person'
import ubication from './routes/ubication'
import product from './routes/product'
import user from './routes/user'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

const app = express()
app.use(express.json())

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT || 3000

dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.USER_DB as string,
  process.env.PASSWORD_DB as string,
  {
    host: process.env.HOST_DB as string,
    dialect: 'postgres'
  }
)

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch((error) => {
  console.error('Unable to connect to the database: ', error)
})

app.get('/ping', (_req, res) => {
  console.log('alguien entro aqui')
  res.send('pong')
})

app.use('/api/person', products)
app.use('/api/ubication', ubication)
app.use('/api/product', product)
app.use('/api/user', user)

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})
