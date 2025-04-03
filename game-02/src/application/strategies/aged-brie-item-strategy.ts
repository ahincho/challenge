import { injectable } from "inversify";
import { Item } from "../../domain/models/item";
import { ItemQualityUpdateStrategy } from "../../domain/strategies/item-quality-update-strategy";

@injectable()
export class AgedBrieItemStrategy implements ItemQualityUpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    item.quality = Math.min(50, item.quality + (item.sellIn < 0 ? 2 : 1));
    return item;
  }
}
