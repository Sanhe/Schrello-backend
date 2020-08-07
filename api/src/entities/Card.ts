export interface ICard {
    cardId: string;
    columnId: string;
    title: string;
    content: string;
    backgroundColorId: string;
    timestamp: string;
}

class Card implements ICard {
    public cardId: string;

    public columnId: string;

    public title: string;

    public content: string;

    public backgroundColorId: string;

    public timestamp: string;

    constructor({
        cardId,
        columnId,
        title,
        content,
        backgroundColorId,
        timestamp,
    }: ICard) {
        this.cardId = cardId;
        this.columnId = columnId;
        this.title = title;
        this.content = content;
        this.backgroundColorId = backgroundColorId;
        this.timestamp = timestamp;
    }
}

export default Card;
