import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import stateModel from './state.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const cityModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('city', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.INTEGER
    },
    idDepartament: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true
  })

  model.hasOne(stateModel(), {
    as: 'state_id',
    foreignKey: 'id',
    sourceKey: 'idDepartament'
  })

  return model
}

export default cityModel
