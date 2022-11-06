import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import orderModel from './order.model'
import productModel from './product.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const productOrdersModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('productOrders', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productId: {
      type: DataTypes.STRING
    },
    orderId: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  model.hasOne(productModel(), {
    as: 'productData',
    foreignKey: 'id',
    sourceKey: 'productId'
  })

  model.hasOne(orderModel(), {
    as: 'orderData',
    foreignKey: 'id',
    sourceKey: 'orderId'
  })

  return model
}

export default productOrdersModel
