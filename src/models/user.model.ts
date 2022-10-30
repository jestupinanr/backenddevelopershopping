import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import personModel from './person.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const UserModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    personId: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    freezeTableName: true
  })

  model.hasOne(personModel(), {
    as: 'personData',
    foreignKey: 'id',
    sourceKey: 'personId'
  })

  return model
}

export default UserModel
