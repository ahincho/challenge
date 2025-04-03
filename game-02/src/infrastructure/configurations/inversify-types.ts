export const TYPES = {
  // Repositories
  ItemRepository: Symbol.for('ItemRepository'),
  // Strategies
  AgedBrieStrategy: Symbol.for('AgedBrieStrategy'),
  BackstagePassStrategy: Symbol.for('BackstagePassStrategy'),
  SulfurasStrategy: Symbol.for('SulfurasStrategy'),
  ConjuredStrategy: Symbol.for('ConjuredStrategy'),
  NormalStrategy: Symbol.for('NormalStrategy'),
  // Services
  FindItemsService: Symbol.for('FindItemsService'),
  UpdateItemQualityService: Symbol.for('UpdateItemQualityService'),
  LegacyUpdateItemsService: Symbol.for('LegacyUpdateItemsService'),
  RefactoredUpdateItemsService: Symbol.for('RefactoredUpdateItemsService'),
  // Controllers
  LegacyItemController: Symbol.for('LegacyItemController'),
  RefactoredItemController: Symbol.for('RefactoredItemController'),
  // Routers
  LegacyItemRouter: Symbol.for('LegacyItemRouter'),
  RefactoredItemRouter: Symbol.for('RefactoredItemRouter'),
  // Express
  Router: Symbol.for('Router'),
};
