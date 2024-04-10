import express, { Express, Router } from "express";
import dotenv from "dotenv";
import OrderController from "../controllers/order.controller";
import { verifyToken } from "../middleware/jwt";

dotenv.config();

export default function setupOrderRoutes(
  app: Express,
  defaultRouter = "/api"
): void {
  const router: Router = express.Router();
  const orderController = new OrderController();

  /**
   * @openapi
   * "/api/v1/orders":
   *   get:
   *     tags:
   *       - Order Module
   *     summary: Get All Order
   *     responses:
   *       200:
   *         description: create the order
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/GetAllOrderResponse"
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  router.get("/orders", verifyToken, orderController.getAllOrder);

  /**
   * @openapi
   * "/api/v1/checkout":
   *   post:
   *     tags:
   *       - Order Module
   *     summary: Create Order
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/CreateOrder"
   *     responses:
   *       200:
   *         description: create the order
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/CreateOrderResponse"
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  router.post("/checkout", verifyToken, orderController.createOrder);

  router.patch("/order", verifyToken, orderController.createOrder);

  app.use(defaultRouter, router);
}
