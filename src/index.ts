import express from 'express'

import products from './routes/person'
import ubication from './routes/ubication'
import product from './routes/product'
import user from './routes/user'
import order from './routes/order'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.USER_DB as string,
  process.env.PASSWORD_DB as string,
  {
    host: process.env.HOST_DB as string,
    dialect: 'mysql'
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
app.use('/api/order', order)

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})
