import express from 'express'
import { QueryTypes } from 'sequelize'
import personModel from '../models/person.model'
import UserModel from '../models/user.model'
import { toLoginEntry, toNewUserEntry } from '../utils'

const router = express.Router()

router.get('/list', (_req, res) => {
  try {
    UserModel().findAll({
      include: [
        {
          model: personModel(),
          as: 'personData'
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
  UserModel().findOne({
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

router.post('/create', (req, res) => {
  try {
    const newUserEntry = toNewUserEntry(req.body)
    UserModel().create({
      ...newUserEntry
    }).then(resp => {
      res.json(resp)
    }).catch((error) => {
      console.error(error)
    })
  } catch (error) {
    res.status(400).send(error)
  };
})

router.get('/login', (req, res) => {
  const loginEntry = toLoginEntry(req.body)
  UserModel().sequelize?.query(`SELECT * FROM user
    INNER JOIN person
    ON person.id = user.personId
    WHERE user.password = ? AND person.email = ?`, {
    replacements: [`${loginEntry.password}`, `${loginEntry.email}`],
    type: QueryTypes.SELECT
  }).then(resp => {
    if (resp.length === 0 || resp === null) {
      res.status(400).send({
        data: 'not-found'
      })
    } else {
      res.send(resp)
    }
  }).catch((error) => {
    res.status(400).send(error)
  })
})

export default router
