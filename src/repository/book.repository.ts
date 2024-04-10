import { GetBook } from "dto/book.dto";
import { BookInterface, Book } from "../database/entity/book";

export default class BookRepository {
  static async findAll(): Promise<any[]> {
    const result = await Book.findAll({
      include: [Book.associations.tags],
    });

    return result;
  }
  static async findById(id_book: number): Promise<BookInterface | null> {
    const result = await Book.findByPk(id_book);
    return result;
  }
  static async create(data: BookInterface): Promise<BookInterface> {
    const result = await Book.create(data);
    return result;
  }
}
