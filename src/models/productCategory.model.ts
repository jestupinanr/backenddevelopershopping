import { Sequelize, DataTypes } from 'sequelize'
import { Connection } from '../db/connection'
import categoryModel from './category.model'
import productModel from './product.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const productCategoryModel = () => {
  const model = (Connection.getInstance().db as Sequelize).define('categoryProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: {
      type: DataTypes.STRING
    },
    categoryId: {
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

  model.hasOne(categoryModel(), {
    as: 'categoryData',
    foreignKey: 'id',
    sourceKey: 'categoryId'
  })

  // model.hasOne(categoryModel(), {
  //   as: 'category_data',
  //   foreignKey: 'id',
  //   sourceKey: 'categoryId'
  // })

  return model
}

export default productCategoryModel
