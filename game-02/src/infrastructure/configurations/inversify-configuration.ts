import { Router } from 'express';
import { Container } from 'inversify';
import { ItemRepository } from '../../domain/repositories/item-repository';
import { ItemQualityUpdateStrategy } from '../../domain/strategies/item-quality-update-strategy';
import { AgedBrieItemStrategy } from '../../application/strategies/aged-brie-item-strategy';
import { BackstagePassItemStrategy } from '../../application/strategies/backstage-pass-item-strategy';
import { SulfurasItemStrategy } from '../../application/strategies/sulfuras-item-strategy';
import { ConjuredItemStrategy } from '../../application/strategies/conjured-item-strategy';
import { NormalItemStrategy } from '../../application/strategies/normal-item-strategy';
import { FindItemsService } from '../../application/services/find-items-service';
import { LegacyGildedRoseUpdateService } from '../../application/services/legacy-gilded-rose-update-service';
import { UpdateItemQualityService } from '../../application/services/update-item-quality-service';
import { RefactoredUpdateItemsService } from '../../application/services/refactored-update-items-service';
import { InMemoryItemRepository } from '../repositories/in-memory-item-repository';
import { LegacyItemController } from '../controllers/legacy-item-controller';
import { RefactoredItemController } from '../controllers/refactored-item-controller';
import { LegacyItemRouter } from '../routes/legacy-item-router';
import { RefactoredItemRouter } from '../routes/refactored-item-router';
import { TYPES } from './inversify-types';

const dependencyInjectionContainer = new Container();

// Repositories
dependencyInjectionContainer.bind<ItemRepository>(TYPES.ItemRepository).to(InMemoryItemRepository).inSingletonScope();

// Strategies
dependencyInjectionContainer.bind<ItemQualityUpdateStrategy>(TYPES.AgedBrieStrategy).to(AgedBrieItemStrategy).inSingletonScope();
dependencyInjectionContainer.bind<ItemQualityUpdateStrategy>(TYPES.BackstagePassStrategy).to(BackstagePassItemStrategy).inSingletonScope();
dependencyInjectionContainer.bind<ItemQualityUpdateStrategy>(TYPES.SulfurasStrategy).to(SulfurasItemStrategy).inSingletonScope();
dependencyInjectionContainer.bind<ItemQualityUpdateStrategy>(TYPES.ConjuredStrategy).to(ConjuredItemStrategy).inSingletonScope();
dependencyInjectionContainer.bind<ItemQualityUpdateStrategy>(TYPES.NormalStrategy).to(NormalItemStrategy).inSingletonScope();

// Services
dependencyInjectionContainer.bind<FindItemsService>(TYPES.FindItemsService).to(FindItemsService).inSingletonScope();
dependencyInjectionContainer.bind<UpdateItemQualityService>(TYPES.UpdateItemQualityService).to(UpdateItemQualityService).inSingletonScope();
dependencyInjectionContainer.bind<LegacyGildedRoseUpdateService>(TYPES.LegacyUpdateItemsService).to(LegacyGildedRoseUpdateService).inSingletonScope();
dependencyInjectionContainer.bind<RefactoredUpdateItemsService>(TYPES.RefactoredUpdateItemsService).to(RefactoredUpdateItemsService).inSingletonScope();

// Controllers
dependencyInjectionContainer.bind<LegacyItemController>(TYPES.LegacyItemController).to(LegacyItemController).inSingletonScope();
dependencyInjectionContainer.bind<RefactoredItemController>(TYPES.RefactoredItemController).to(RefactoredItemController).inSingletonScope();

// Routers
dependencyInjectionContainer.bind<LegacyItemRouter>(TYPES.LegacyItemRouter).to(LegacyItemRouter).inSingletonScope();
dependencyInjectionContainer.bind<RefactoredItemRouter>(TYPES.RefactoredItemRouter).to(RefactoredItemRouter).inSingletonScope();

// Express
dependencyInjectionContainer.bind<Router>(TYPES.Router).toConstantValue(Router());

export { dependencyInjectionContainer };
