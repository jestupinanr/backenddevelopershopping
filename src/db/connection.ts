import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

export class Connection {
  private static instance: Connection
  public db?: Sequelize

  /**
   * Obtiene la instancia de la clase
   */
  public static getInstance (): Connection {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!Connection.instance) {
      Connection.instance = new Connection()

      Connection.instance.db = new Sequelize(
        process.env.DATABASE_NAME as string,
        process.env.USER_DB as string,
        process.env.PASSWORD_DB as string,
        {
          host: process.env.PORT as string,
          dialect: 'postgres',
          define: {
            timestamps: false
          },
          logging: false
        })
    }

    return Connection.instance
  }
}
