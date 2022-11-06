import express from 'express'
import orderModel from '../models/order.model'
import productModel from '../models/product.model'
import productOrdersModel from '../models/productOrders.model'

const router = express.Router()

router.get('/list', (_req, res) => {
  try {
    productOrdersModel().findAll({
      include: [
        {
          model: productModel(),
          as: 'productData'
        }, {
          model: orderModel(),
          as: 'orderData'
        }
      ]
    }).then(resp => {
      res.send(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

router.get('/get-one/:id', (req, res) => {
  const { id } = req.params
  productOrdersModel().findOne({
    where: {
      id
    }
  }).then(resp => {
    if (resp != null) {
      res.send(resp)
    } else {
      res.status(400).send({
        data: 'not-found'
      })
    }
  }).catch((error) => {
    res.status(400).send(error)
    res.sendStatus(404)
  })
})

router.get('/get-by-user/:id', (req, res) => {
  try {
    const { id } = req.params
    productOrdersModel().findAll({
      include: [
        {
          model: productModel(),
          as: 'productData'
        }, {
          model: orderModel(),
          where: {
            userId: id
          },
          as: 'orderData'
        }
      ]
    }).then(resp => {
      if (resp.length > 0) {
        res.send(resp)
      } else {
        res.status(400).send({
          data: 'not-found'
        })
      }
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

export default router
