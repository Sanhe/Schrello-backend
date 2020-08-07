import { ICard } from "@entities/Card";
import {MongoDao} from "@daos/MongoDb/MongoDao";
import CardModel from "@daos/Card/CardModelMongo.ts";

export interface ICardDao {
  getOne: (cardId: number) => Promise<ICard | null>;
  getAll: () => Promise<ICard[]>;
  add: (user: ICard) => Promise<void>;
  update: (user: ICard) => Promise<void>;
  delete: (cardId: number) => Promise<void>;
}

class CardDao extends MongoDao implements ICardDao {
  /**
   * @param cardId
   */
  public async getOne(cardId: number): Promise<ICard | null> {
    // TODO
    return [] as any;
  }

  /**
   *
   */
  public async getAll(): Promise<ICard[]> {
    try {
      let cards: any[];
      cards = [];

      await super.openDb();

      await CardModel.find({},(err, items) => {
        if (err) {
          throw err;
        }

        cards = items.slice();
      });

      return cards as any;
    } catch (err) {
      throw err;
    }
  }

  /**
   *
   * @param card
   */
  public async add(card: ICard): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param card
   */
  public async update(card: ICard): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param cardId
   */
  public async delete(cardId: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

export default CardDao;
