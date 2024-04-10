import express, { Express, Router } from "express";
import dotenv from "dotenv";

import AuthController from "../controllers/auth.controller";

dotenv.config();

export default function userRoutes(app: Express, defaultRouter = "/api"): void {
  const router: Router = express.Router();
  const authController = new AuthController();

  /**
   * @openapi
   * '/api/v1/signup':
   *  post:
   *     tags:
   *     - Auth
   *     summary: Signup a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/SignUp'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SignUpResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.post("/signup", authController.signUp);

  /**
   * @openapi
   * '/api/v1/signin':
   *  post:
   *     tags:
   *     - Auth
   *     summary: Signin a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/SignIn'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SignInResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.post("/signin", authController.signIn);

  app.use(defaultRouter, router);
}
