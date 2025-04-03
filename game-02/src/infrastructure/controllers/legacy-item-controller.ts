import { inject, injectable } from "inversify";
import { TYPES } from "../configurations/inversify-types";
import { Item } from "../../domain/models/item";
import { LegacyGildedRoseUpdateService } from "../../application/services/legacy-gilded-rose-update-service";

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
