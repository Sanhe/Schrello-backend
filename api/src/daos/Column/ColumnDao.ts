import { IColumn } from "@entities/Column";
import {MongoDao} from "@daos/MongoDb/MongoDao";
import ColumnModel from "@daos/Column/ColumnModelMongo";

export interface IColumnDao {
  getOne: (columnId: number) => Promise<IColumn | null>;
  getAll: () => Promise<IColumn[]>;
  add: (user: IColumn) => Promise<void>;
  update: (user: IColumn) => Promise<void>;
  delete: (columnId: number) => Promise<void>;
}

class ColumnDao extends MongoDao implements IColumnDao {
  /**
   * @param columnId
   */
  public async getOne(columnId: number): Promise<IColumn | null> {
    // TODO
    return [] as any;
  }

  /**
   *
   */
  public async getAll(): Promise<IColumn[]> {
    try {
      let columns: any[];
      columns = [];

      await super.openDb();

      await ColumnModel.find({},(err, cols) => {
        if (err) {
          throw err;
        }

        columns = cols.slice();
      });

      return columns as any;
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param column
   */
  public async add(column: IColumn): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param column
   */
  public async update(column: IColumn): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param columnId
   */
  public async delete(columnId: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

export default ColumnDao;
