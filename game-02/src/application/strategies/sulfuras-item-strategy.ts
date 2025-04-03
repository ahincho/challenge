import { injectable } from "inversify";
import { Item } from "../../domain/models/item";
import { ItemQualityUpdateStrategy } from "../../domain/strategies/item-quality-update-strategy";

@injectable()
export class SulfurasItemStrategy implements ItemQualityUpdateStrategy {
  update(item: Item): Item {
    return item;
  }
}
