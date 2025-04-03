import { inject, injectable } from "inversify";
import { TYPES } from "../configurations/inversify-types";
import { Item } from "src/domain/models/item";
import { FindItemsService } from "src/application/services/find-items-service";
import { RefactoredUpdateItemsService } from "src/application/services/refactored-update-items-service";

@injectable()
export class RefactoredItemController {
  constructor(
    @inject(TYPES.FindItemsService)
    private readonly findItemsService: FindItemsService,
    @inject(TYPES.RefactoredUpdateItemsService)
    private readonly refactoredUpdateItemsService: RefactoredUpdateItemsService,
  ) {}
  findItems(): Array<Item> {
    return this.findItemsService.execute();
  }
  refactoredUpdateItems(): Array<Item> {
    return this.refactoredUpdateItemsService.execute();
  }
}
