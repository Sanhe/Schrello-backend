import { IColumn } from "@entities/Column";

export interface IColumnDao {
  getOne: (columnId: number) => Promise<IColumn | null>;
  getAll: () => Promise<IColumn[]>;
  add: (user: IColumn) => Promise<void>;
  update: (user: IColumn) => Promise<void>;
  delete: (columnId: number) => Promise<void>;
}

class ColumnDao implements IColumnDao {
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
    // TODO
    return [] as any;
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
