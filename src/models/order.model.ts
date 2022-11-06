import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
// import productCategoryModel from './productCategory.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const orderModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clientId: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    total: {
      type: DataTypes.STRING
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    freezeTableName: true
  })

  // model.hasMany(productCategoryModel(), {
  //   as: 'categoryProduct'
  // })

  return model
}

export default orderModel
