import { CreateCart } from "../dto/cart.dto";
import { Book } from "../database/entity/book";
import { Cart, CartAttributes } from "../database/entity/cart";
import { Sequelize, WhereOptions } from "sequelize";

export default class CartRepository {
  static async findAll(options: WhereOptions<CartAttributes>): Promise<any[]> {
    const result = await Cart.findAll({
      include: [Book],
      where: options,
      attributes: [
        "id_cart",
        "qty",
        [Sequelize.literal('qty * "Book"."price"'), "totalPrice"],
        [Sequelize.col("Book.*"), "Book"],
        "createdAt",
      ],
    });

    return result;
  }
  static async findById(id_book: number): Promise<CartAttributes | null> {
    const result = await Cart.findOne({ where: { id_book } });
    return result;
  }
  static async create(data: CreateCart): Promise<CreateCart> {
    const result = await Cart.create(data);
    return result;
  }
  static async updateQty(
    qty: number,
    id_cart?: number
  ): Promise<[affectedCount: number]> {
    return await Cart.update({ qty }, { where: { id_cart } });
  }
}
