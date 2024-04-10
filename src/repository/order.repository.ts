import { Sequelize, WhereOptions } from "sequelize";
import { Order, OrderAttributes } from "../database/entity/order";
import { CreateOrder, GetOrder } from "../dto/order.dto";
import { Book } from "../database/entity/book";
import { User } from "../database/entity/user";

export default class OrderRepository {
  static async findAll(options: WhereOptions<OrderAttributes>): Promise<any[]> {
    const result = await Order.findAll({
      include: [Book, User],
      where: options,
      attributes: [
        [Sequelize.col("Book.*"), "Book"],
        [Sequelize.col("User.*"), "User"],
        "status",
        "price",
        "createdAt",
      ],
    });
    return result;
  }
  // static async findById(id_book): Promise<any[]> {
  //   const result = await Order.findByPk();
  //   return result;
  // }
  static async create(data: CreateOrder): Promise<CreateOrder> {
    const result = await Order.create(data);
    return result;
  }

  static async cancelOrder(
    options: WhereOptions<OrderAttributes>
  ): Promise<[affectedCount: number]> {
    return await Order.update({ status: 3 }, { where: options });
  }
}
