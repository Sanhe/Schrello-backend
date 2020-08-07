export interface IColumn {
  columnId: string;
  boardId: string;
  title: string;
  backgroundColorId: string;
  timestamp: string;
}

class Column implements IColumn {
  public columnId: string;

  public boardId: string;

  public title: string;

  public backgroundColorId: string;

  public timestamp: string;

  constructor({
    columnId,
    boardId,
    title,
    backgroundColorId,
    timestamp,
  }: IColumn) {
    this.columnId = columnId;
    this.boardId = boardId;
    this.title = title;
    this.backgroundColorId = backgroundColorId;
    this.timestamp = timestamp;
  }
}

export default Column;
