import { Model, DataTypes, Association } from "sequelize";
import connection from "../connection"; // Pastikan Anda mengimpor objek sequelize yang benar
import { Book } from "./book";
import { User } from "./user";

export interface CartAttributes {
  id_cart?: number;
  id_user: number;
  id_book: number;
  qty: number;
}

export class Cart extends Model<CartAttributes> {
  declare id_cart: number;
  declare id_user: number;
  declare id_book: number;
  declare qty: number;

  declare static associations: {
    book: Association<Cart, Book>;
    user: Association<Cart, User>;
  };
}

Cart.init(
  {
    id_cart: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_book: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Cart",
  }
);

Cart.hasOne(Book, {
  foreignKey: "id_book",
});

Cart.hasOne(User, {
  foreignKey: "id_user",
});
