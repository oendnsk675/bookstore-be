import { CreateCart } from "dto/cart.dto";
import { CustomRequest } from "../dto/customRequest.dto";
import CartRepository from "../repository/cart.repository";

export default class CartService {
  static async getAllCart(id_user: number): Promise<any> {
    const result = await CartRepository.findAll({
      id_user,
    });
    return result;
  }
  static async addCart(req: CustomRequest): Promise<any> {
    const cart = await CartRepository.findById(req.body.id_book);
    let data: CreateCart | null = null;

    if (!cart) {
      data = {
        id_user: req.id_user,
        id_book: req.body.id_book,
        qty: req.body.qty,
      };
      console.log("asdasdasdasd");

      return await CartRepository.create(data);
    } else {
      const qty = req.body.qty + cart.qty;

      data = {
        id_user: req.id_user,
        id_book: req.body.id_book,
        qty,
      };
      return await CartRepository.updateQty(qty, cart.id_cart);
    }
  }
}
