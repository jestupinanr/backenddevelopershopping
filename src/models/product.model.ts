import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
// import productCategoryModel from './productCategory.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const productModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.NUMBER
    },
    imageUrl: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  // model.hasMany(productCategoryModel(), {
  //   as: 'categoryProduct'
  // })

  return model
}

export default productModel
