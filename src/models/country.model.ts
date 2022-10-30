import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const countryModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('country', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  return model
}

export default countryModel
