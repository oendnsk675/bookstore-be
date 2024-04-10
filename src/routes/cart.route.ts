import express, { Express, Router } from "express";
import dotenv from "dotenv";
import CartController from "../controllers/cart.controller";
import { verifyToken } from "../middleware/jwt";

dotenv.config();

export default function setupOrderRoutes(
  app: Express,
  defaultRouter = "/api"
): void {
  const router: Router = express.Router();
  const cartController = new CartController();

  /**
   * @openapi
   * "/api/v1/cart":
   *   get:
   *     tags:
   *       - Cart Module
   *     summary: Get All Cart
   *     responses:
   *       200:
   *         description: create the order
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/GetAllCartResponse"
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  router.get("/cart", verifyToken, cartController.getAllCart);

  /**
   * @openapi
   * "/api/v1/cart":
   *   post:
   *     tags:
   *       - Cart Module
   *     summary: Add Cart
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/AddCart"
   *     responses:
   *       200:
   *         description: add cart
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/AddCart"
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  router.post("/cart", verifyToken, cartController.addCart);

  app.use(defaultRouter, router);
}
