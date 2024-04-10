import { Express } from "express";

import userRoutes from "./user.route";
import bookRoutes from "./book.route";
import orderRoutes from "./order.route";
import cartRoutes from "./cart.route";

export default function setupRoutes(app: Express, defaultRouter: string): void {
  userRoutes(app, defaultRouter);
  bookRoutes(app, defaultRouter);
  orderRoutes(app, defaultRouter);
  cartRoutes(app, defaultRouter);
}
