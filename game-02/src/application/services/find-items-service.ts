import { inject, injectable } from "inversify";
import { TYPES } from "src/infrastructure/configurations/inversify-types";
import { Item } from "src/domain/models/item";
import { ItemRepository } from "src/domain/repositories/item-repository";

@injectable()
export class FindItemsService {
  constructor(
    @inject(TYPES.ItemRepository)
    private readonly itemRepository: ItemRepository,
  ) {}
  execute(): Array<Item> {
    return this.itemRepository.findAll();
  }
}
