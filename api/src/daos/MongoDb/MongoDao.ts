import mongoose from "mongoose";

export class MongoDao {

  protected async openDb(): Promise<any> {
      if (mongoose.connection.readyState === 1) {
          return mongoose.connection;
      }

      const conn = mongoose.connect(
          `${process.env.MONGO_DATABASE_URL}`,
          {
              // user: process.env.MONGO_USERNAME,
              // pass: process.env.MONGO_PASSWORD,
              authSource: "admin",
              useNewUrlParser: true,
              useUnifiedTopology: true,
          },
          (error) => {
              if (error) {
                  throw error;
              }
          }
      );

      return conn;
  }

  // protected saveDb(db: any): Promise<any> {
  //   return ;
  // }
}
