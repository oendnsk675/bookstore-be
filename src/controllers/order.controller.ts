import { Request, Response } from "express";
import OrderService from "../service/order.service";
import { CustomRequest } from "../dto/customRequest.dto";

export default class OrderController {
  public async getAllOrder(req: Request, res: Response): Promise<Response> {
    try {
      const id_user = (req as CustomRequest).id_user;
      const result = await OrderService.getAllOrder(id_user);
      return res.status(201).json({
        message: "Successfully retrirved all order.",
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
  public async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      const result = await OrderService.createOrder(req);
      return res.status(201).json({
        message: "Successfully create order.",
      });
    } catch (error) {
      let message = "Unknown Error";
      //   console.log(error);

      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }
  public async cancelOrder(req: Request, res: Response): Promise<Response> {
    try {
      await OrderService.cancelOrder(req.body.id_order);
      return res.status(201).json({
        message: "Successfully cancel the order.",
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
