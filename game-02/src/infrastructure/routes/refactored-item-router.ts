import { Router, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { RefactoredItemController } from "../controllers/refactored-item-controller";
import { TYPES } from "../configurations/inversify-types";

@injectable()
export class RefactoredItemRouter {
  constructor(
    @inject(TYPES.Router)
    public readonly router: Router,
    @inject(TYPES.RefactoredItemController)
    private readonly refactoredItemController: RefactoredItemController,
  ) {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get('/', this.findItems.bind(this));
    this.router.patch('/', this.refactoredUpdateItems.bind(this));
  }
  private findItems(_req: Request, res: Response): void {
    try {
      const items = this.refactoredItemController.findItems();
      res.json(items);
    } catch (error) {
      res.status(500).send('Error retrieving items');
    }
  }
  private refactoredUpdateItems(_req: Request, res: Response): void {
    try {
      const updatedItems = this.refactoredItemController.refactoredUpdateItems();
      res.json(updatedItems);
    } catch (error) {
      res.status(500).send('Error updating items');
    }
  }
}
