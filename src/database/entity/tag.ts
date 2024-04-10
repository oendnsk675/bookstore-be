import { Model, DataTypes, Association } from "sequelize";
import connection from "../connection";
import { Book } from "./book";

export interface TagAttributes {
  id_tag: number;
  tag: string;
}

export class Tag extends Model<TagAttributes> {
  declare id_tag: number;
  declare tag: string;

  declare static associations: {
    books: Association<Tag, Book>;
  };
}

Tag.init(
  {
    id_tag: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tag: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Tag",
  }
);

// Tag.belongsTo(Book);
