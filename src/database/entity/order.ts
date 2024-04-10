import { Model, DataTypes, Association } from "sequelize";
import connection from "../connection";
import { Book } from "./book";
import { User } from "./user";

export interface OrderAttributes {
  id_order?: number;
  id_user: number;
  id_book: number;
  status: number;
  price: number;
}

export class Order extends Model<OrderAttributes> {
  declare id_order: number;
  declare id_user: number;
  declare id_book: number;
  declare status: number;
  declare price: number;

  declare static associations: {
    user: Association<Order, User>;
    book: Association<Order, Book>;
  };
}

Order.init(
  {
    id_order: {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Order",
  }
);

Order.belongsTo(User, {
  foreignKey: "id_user",
});

Order.belongsTo(Book, {
  foreignKey: "id_book",
});
