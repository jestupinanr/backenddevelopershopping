import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import countryModel from './country.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const stateModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('departament', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    idCountry: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  model.hasOne(countryModel(), {
    as: 'country_id',
    foreignKey: 'id',
    sourceKey: 'idCountry'
  })

  return model
}

export default stateModel
