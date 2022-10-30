import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const categoryModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('category', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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

export default categoryModel
