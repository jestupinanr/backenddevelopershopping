import express from 'express'
import cityModel from '../models/city.model'
import personModel from '../models/person.model'
// import * as diaryServices from '../services/productServices'
import { toNewPersonEntry } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  try {
    personModel().findAll({
      include: [
        {
          model: cityModel(),
          as: 'city_data'
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

router.get('/:id', (req, res) => {
  const { id } = req.params
  personModel().findOne({
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

router.post('/', (req, res) => {
  try {
    const newProductEntry = toNewPersonEntry(req.body)
    personModel().create({
      ...newProductEntry
    }).then(resp => {
      res.json(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    res.status(400).send(error)
  };
})

export default router
