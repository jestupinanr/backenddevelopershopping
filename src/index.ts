import express from 'express'

import products from './routes/products'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('alguien entro aqui')
  res.send('pong')
})

app.use('/api/products', products)

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})
