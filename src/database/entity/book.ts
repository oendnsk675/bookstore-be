import { Model, DataTypes, Optional, Association } from "sequelize";
import connection from "../connection";
import { Tag } from "./tag";

export interface BookInterface {
  id_book?: number;
  title: string;
  alt_title: string;
  writer: string;
  cover_image: string;
  price: number;
  olid: string;
}

export class Book extends Model<BookInterface> {
  declare id_book: number;
  declare title: string;
  declare alt_title: string;
  declare writer: string;
  declare cover_image: string;
  declare price: number;
  declare olid: string;

  declare static associations: {
    tags: Association<Book, Tag>;
  };
}

Book.init(
  {
    id_book: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    alt_title: DataTypes.STRING,
    writer: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    olid: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Book",
  }
);

Book.hasMany(Tag, {
  sourceKey: "id_book",
  foreignKey: "id_tag",
  as: "tags",
});
