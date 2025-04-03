import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/configurations/inversify-types";
import { Item } from "../../domain/models/item";
import { ItemRepository } from "../../domain/repositories/item-repository";

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
