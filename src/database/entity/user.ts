import { Model, DataTypes, CreationOptional, Association } from "sequelize";
import connection from "../connection";
import { Order } from "./order";

export interface UserInterface {
  id_user?: number;
  fullname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  avatar?: string;
  point?: number;
}

export class User extends Model<UserInterface> {
  declare id_user: CreationOptional<number>;
  declare fullname: string;
  declare email: string;
  declare password: string;
  declare phone: string;
  declare address: string;
  declare avatar: string;
  declare point: number;

  declare static associations: {
    orders: Association<User, Order>;
  };
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    point: DataTypes.INTEGER,
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);
