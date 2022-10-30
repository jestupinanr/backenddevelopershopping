import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import cityModel from './city.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const personModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('person', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nit: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    cityId: {
      type: DataTypes.UUID
    },
    email: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  model.hasOne(cityModel(), {
    as: 'city_data',
    foreignKey: 'id',
    sourceKey: 'cityId'
  })

  return model
}

export default personModel
