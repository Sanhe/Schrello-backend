import { IColumn } from "@entities/Column";
import { getRandomInt } from "@shared/functions";
import { MockDaoMock } from "../MockDb/MockDao.mock";
import { IColumnDao } from "./ColumnDao";

class ColumnDao extends MockDaoMock implements IColumnDao {
  public async getOne(columnId: number): Promise<IColumn | null> {
    try {
      const db = await super.openDb();
      for (const column of db.columns) {
        if (column.columnId === columnId) {
          return column;
        }
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  public async getAll(): Promise<IColumn[]> {
    try {
      const db = await super.openDb();
      return db.columns;
    } catch (err) {
      throw err;
    }
  }

  public async add(column: IColumn): Promise<void> {
    try {
      const db = await super.openDb();
      column.columnId = getRandomInt();
      db.users.push(column);
      await super.saveDb(db);
    } catch (err) {
      throw err;
    }
  }

  public async update(column: IColumn): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.columns.length; i++) {
        if (db.columns[i].columnId === column.columnId) {
          db.columns[i] = column;
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("User not found");
    } catch (err) {
      throw err;
    }
  }

  public async delete(columnId: number): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.columns.length; i++) {
        if (db.columns[i].columnId === columnId) {
          db.columns.splice(i, 1);
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("User not found");
    } catch (err) {
      throw err;
    }
  }
}

export default ColumnDao;
