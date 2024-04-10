import express, { Express, Router } from "express";
import dotenv from "dotenv";

import BookController from "../controllers/book.controller";
import { verifyToken } from "../middleware/jwt";

dotenv.config();

export default function setupUserRoutes(
  app: Express,
  defaultRouter = "/api"
): void {
  const router: Router = express.Router();
  const bookController = new BookController();

  /**
   * @openapi
   * '/api/v1/books':
   *  get:
   *     tags:
   *     - Book Module
   *     summary: Get All Book
   *     responses:
   *      200:
   *        description: The list of the books
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetAllBookResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.get("/books", verifyToken, bookController.getAllBook);

  /**
   * @openapi
   * "/api/v1/books":
   *   post:
   *     tags:
   *       - Book Module
   *     summary: Add a Book
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/AddBook"
   *     responses:
   *       200:
   *         description: The list of the books
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/AddBookResponse"
   *       409:
   *         description: Conflict
   *       400:
   *         description: Bad request
   */
  router.post("/books", verifyToken, bookController.create);

  app.use(defaultRouter, router);
}
