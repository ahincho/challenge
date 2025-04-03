import { injectable } from "inversify";
import { Item } from "src/domain/models/item";
import { ItemQualityUpdateStrategy } from "src/domain/strategies/item-quality-update-strategy";

@injectable()
export class ConjuredItemStrategy implements ItemQualityUpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 4 : 2));
    return item;
  }
}
