import { injectable } from "inversify";
import { Item } from "src/domain/models/item";
import { ItemRepository } from "src/domain/repositories/item-repository";

@injectable()
export class InMemoryItemRepository implements ItemRepository {
  private items: Array<Item>;
  constructor() {
    this.items = [
      new Item("Normal Item", 10, 20),
      new Item("Aged Brie", 5, 30),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Conjured Mana Cake", 3, 6),
    ];
  }
  findAll(): Array<Item> {
    return this.items;
  }
  saveAll(items: Array<Item>): Array<Item> {
    this.items = items;
    return this.items;
  }
}
