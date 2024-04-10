import { Request, Response } from "express";
import UserService from "../service/user.service";

interface AuthResponse {
  message: string;
  result: {
    id: number;
    name: string;
  };
}

export default class AuthController {
  public async signUp(req: Request, res: Response): Promise<Response> {
    try {
      const result = await UserService.signUp(req.body);

      return res.status(201).json({
        message: "success sign up",
        result: {
          id: result.id_user,
          name: result.fullname,
        },
      });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }

  public async signIn(req: Request, res: Response): Promise<Response> {
    try {
      const token = await UserService.signIn(req.body);

      return res.status(200).json({
        message: "success sign in",
        token,
      });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }
}
