import { Model, DataTypes, Optional } from "sequelize";
import connection from "../connection";

interface BookTagAttributes {
  id_book_tag: number;
  id_book: number;
  id_tag: number;
}

class BookTag extends Model<BookTagAttributes> {
  declare id_book_tag: number;
  declare id_book: number;
  declare id_tag: number;
}

BookTag.init(
  {
    id_book_tag: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_book: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER,
  },
  {
    sequelize: connection,
    modelName: "BookTag",
  }
);

export default BookTag;
