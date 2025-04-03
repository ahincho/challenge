import { Router, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { LegacyItemController } from "../controllers/legacy-item-controller";
import { TYPES } from "../configurations/inversify-types";

@injectable()
export class LegacyItemRouter {
  constructor(
    @inject(TYPES.Router)
    public readonly router: Router,
    @inject(TYPES.LegacyItemController)
    private readonly legacyItemController: LegacyItemController,
  ) {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.patch('/', this.refactoredUpdateItems.bind(this));
  }
  private refactoredUpdateItems(_req: Request, res: Response): void {
    try {
      const updatedItems = this.legacyItemController.legacyUpdateItems();
      res.json(updatedItems);
    } catch (error) {
      res.status(500).send('Error updating items');
    }
  }
}
