import { injectable } from "inversify";
import { Item } from "src/domain/models/item";
import { ItemQualityUpdateStrategy } from "src/domain/strategies/item-quality-update-strategy";

@injectable()
export class SulfurasItemStrategy implements ItemQualityUpdateStrategy {
  update(item: Item): Item {
    return item;
  }
}
