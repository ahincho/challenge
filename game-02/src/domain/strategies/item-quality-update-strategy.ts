import { Item } from "../models/item";

export interface ItemQualityUpdateStrategy {
  update(item: Item): Item;
}
