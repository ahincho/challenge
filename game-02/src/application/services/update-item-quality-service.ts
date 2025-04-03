import { inject, injectable } from "inversify";
import { Item } from "src/domain/models/item";
import { ItemType } from "src/domain/models/item-type";
import { ItemQualityUpdateStrategy } from "src/domain/strategies/item-quality-update-strategy";
import { TYPES } from "src/infrastructure/configurations/inversify-types";

@injectable()
export class UpdateItemQualityService {
  constructor(
    @inject(TYPES.AgedBrieStrategy)
    private readonly agedBrieStrategy: ItemQualityUpdateStrategy,
    @inject(TYPES.BackstagePassStrategy)
    private readonly backstagePassStrategy: ItemQualityUpdateStrategy,
    @inject(TYPES.SulfurasStrategy)
    private readonly sulfurasStrategy: ItemQualityUpdateStrategy,
    @inject(TYPES.ConjuredStrategy)
    private readonly conjuredStrategy: ItemQualityUpdateStrategy,
    @inject(TYPES.NormalStrategy)
    private readonly normalStrategy: ItemQualityUpdateStrategy,
  ) {}
  execute(item: Item): Item {
    const strategy = this.getItemQualityStrategy(item.name);
    return strategy.update(item);
  }
  private getItemQualityStrategy(itemName: string): ItemQualityUpdateStrategy {
    switch (itemName) {
      case ItemType.AGED_BRIE:
        return this.agedBrieStrategy;
      case ItemType.BACKSTAGE_PASS:
        return this.backstagePassStrategy;
      case ItemType.SULFURAS:
        return this.sulfurasStrategy;
      case ItemType.CONJURED:
        return this.conjuredStrategy;
      default:
        return this.normalStrategy;
    }
  }
}
