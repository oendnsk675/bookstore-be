import { Request } from "express";
import { CreateOrder } from "../dto/order.dto";
import OrderRepository from "../repository/order.repository";
import BookRepository from "../repository/book.repository";

export default class OrderService {
  static async getAllOrder(id_user: number): Promise<any> {
    const result = await OrderRepository.findAll({
      id_user,
    });
    return result;
  }
  static async createOrder(
    req: Request & { id_user?: number }
  ): Promise<CreateOrder> {
    req.body.id_user = req.id_user;
    const book = await BookRepository.findById(req.body.id_book);
    if (!book) {
      throw new Error("Book Not Found");
    }
    req.body.price = book.price;

    const result = await OrderRepository.create(req.body);
    return result;
  }
  static async cancelOrder(id_order: number): Promise<any> {
    return await OrderRepository.cancelOrder({ id_order });
  }
}
