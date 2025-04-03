import { inject, injectable } from "inversify";
import { TYPES } from "../configurations/inversify-types";
import { Item } from "src/domain/models/item";
import { LegacyGildedRoseUpdateService } from "src/application/services/legacy-gilded-rose-update-service";

@injectable()
export class LegacyItemController {
  constructor(
    @inject(TYPES.LegacyUpdateItemsService)
    private readonly legacyGildedRoseUpdateService: LegacyGildedRoseUpdateService,
  ) {}
  legacyUpdateItems(): Array<Item> {
    return this.legacyGildedRoseUpdateService.updateQuality();
  }
}
