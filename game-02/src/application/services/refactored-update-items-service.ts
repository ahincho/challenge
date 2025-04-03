import { inject, injectable } from "inversify";
import { Item } from "../../domain/models/item";
import { ItemRepository } from "../../domain/repositories/item-repository";
import { TYPES } from "../../infrastructure/configurations/inversify-types";
import { UpdateItemQualityService } from "./update-item-quality-service";

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
