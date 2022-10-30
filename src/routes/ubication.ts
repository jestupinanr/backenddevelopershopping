import express from 'express'
import cityModel from '../models/city.model'
import countryModel from '../models/country.model'
import stateModel from '../models/state.model'

const router = express.Router()

router.get('/countries', (_req, res) => {
  try {
    countryModel().findAll().then(resp => {
      res.send(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

router.get('/states', (_req, res) => {
  try {
    stateModel().findAll().then(resp => {
      res.send(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

router.get('/cities', (_req, res) => {
  try {
    cityModel().findAll().then(resp => {
      res.send(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
})

// router.get('/:id', (req, res) => {
//   const diary = diaryServices.findById(+req.params.id)
//   return (diary != null)
//     ? res.send(diary)
//     : res.sendStatus(404)
// })

export default router
