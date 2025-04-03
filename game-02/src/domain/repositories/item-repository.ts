import { Item } from "../models/item";

export interface ItemRepository {
  findAll(): Array<Item>;
  saveAll(items: Array<Item>): Array<Item>;
}
