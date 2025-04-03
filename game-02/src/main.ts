import express from "express";
import { LegacyItemRouter } from "./infrastructure/routes/legacy-item-router";
import { RefactoredItemRouter } from "./infrastructure/routes/refactored-item-router";
import { dependencyInjectionContainer } from "./infrastructure/configurations/inversify-configuration";
import { TYPES } from "./infrastructure/configurations/inversify-types";

const app = express();
const port = 3000;

const legacyItemRouter = dependencyInjectionContainer.get<LegacyItemRouter>(TYPES.LegacyItemRouter);
const refactoredItemRouter = dependencyInjectionContainer.get<RefactoredItemRouter>(TYPES.RefactoredItemRouter);

app.use('/api/v1/items', legacyItemRouter.router);
app.use('/api/v2/items', refactoredItemRouter.router);

app.listen(port, () => {
  console.log(`Express application listening on port ${port}`);
});
