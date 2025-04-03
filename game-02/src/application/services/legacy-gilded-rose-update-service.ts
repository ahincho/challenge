import { inject, injectable } from "inversify";
import { Item } from "../../domain/models/item";
import { ItemRepository } from "../../domain/repositories/item-repository";
import { TYPES } from "../../infrastructure/configurations/inversify-types";

@injectable()
export class LegacyGildedRoseUpdateService {
  constructor(
    @inject(TYPES.ItemRepository)
    private readonly itemRepository: ItemRepository,
  ) { }
  updateQuality(): Array<Item> {
    const items = this.itemRepository.findAll();
    for (let i = 0; i < items.length; i++) {
      if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].quality = items[i].quality - 1
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].sellIn < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
            if (items[i].sellIn < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
          }
        }
      }
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        items[i].sellIn = items[i].sellIn - 1;
      }
      if (items[i].sellIn < 0) {
        if (items[i].name != 'Aged Brie') {
          if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
              if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                items[i].quality = items[i].quality - 1
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
        }
      }
    }
    this.itemRepository.saveAll(items);
    return items;
  }
}
