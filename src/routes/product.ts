import express from 'express'
import categoryModel from '../models/category.model'
import productModel from '../models/product.model'
import productCategoryModel from '../models/productCategory.model'

const router = express.Router()

router.get('/list', (_req, res) => {
  try {
    productCategoryModel().findAll({
      include: [
        {
          model: productModel(),
          as: 'productData'
        }, {
          model: categoryModel(),
          as: 'categoryData'
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
  productModel().findOne({
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

router.get('/category', (_req, res) => {
  try {
    categoryModel().findAll().then(resp => {
      res.send(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

export default router
