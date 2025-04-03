import { Item } from "src/domain/models/item";
import { ItemRepository } from "src/domain/repositories/item-repository";
import { UpdateItemQualityService } from "./update-item-quality-service";
import { inject, injectable } from "inversify";
import { TYPES } from "src/infrastructure/configurations/inversify-types";

@injectable()
export class RefactoredUpdateItemsService {
  constructor(
    @inject(TYPES.ItemRepository)
    private readonly itemRepository: ItemRepository,
    @inject(TYPES.UpdateItemQualityService)
    private readonly updateItemQualityService: UpdateItemQualityService,
  ) {}
  execute(): Array<Item> {
    const items = this.itemRepository.findAll();
    const updatedItems = items.map(item => this.updateItemQualityService.execute(item));
    return this.itemRepository.saveAll(updatedItems);
  }
}
