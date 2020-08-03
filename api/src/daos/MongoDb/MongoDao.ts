import mongodb from "mongodb";

export class MongoDao {
  private readonly dbUrl = "mongodb://localhost:27017/default";

  // protected openDb(): Promise<any> {
  //   const dbConnect = mongodb.open("", function (err, client) {});
  //
  //   return dbConnect;
  // }

  // protected saveDb(db: any): Promise<any> {
  //   return ;
  // }
}
