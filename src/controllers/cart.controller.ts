import { Request, Response } from "express";
import { CustomRequest } from "../dto/customRequest.dto";
import CartService from "../service/cart.service";

export default class OrderController {
  public async getAllCart(req: Request, res: Response): Promise<Response> {
    try {
      const id_user = (req as CustomRequest).id_user;
      const result = await CartService.getAllCart(id_user);
      return res.status(201).json({
        message: "Successfully retrirved the cart.",
        data: result,
      });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }
  public async addCart(req: Request, res: Response): Promise<Response> {
    try {
      const data = req as CustomRequest;
      const result = await CartService.addCart(data);
      return res.status(201).json({
        message: "Successfully add to cart.",
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
