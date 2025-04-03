import { injectable } from "inversify";
import { Item } from "../../domain/models/item";
import { ItemQualityUpdateStrategy } from "../../domain/strategies/item-quality-update-strategy";

@injectable()
export class BackstagePassItemStrategy implements ItemQualityUpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 5) {
      item.quality = Math.min(50, item.quality + 3);
    } else if (item.sellIn < 10) {
      item.quality = Math.min(50, item.quality + 2);
    } else {
      item.quality = Math.min(50, item.quality + 1);
    }
    return item;
  }
}
