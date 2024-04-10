import express, { Express, Router } from "express";
import dotenv from "dotenv";

dotenv.config();

export default function setupUserRoutes(
  app: Express,
  defaultRouter = "/api"
): void {
  const router: Router = express.Router();

  app.use(defaultRouter, router);
}
