import { AddBook, GetBook } from "dto/book.dto";
import { BookInterface } from "../database/entity/book";
import BookRepository from "../repository/book.repository";

export default class BookService {
  static async getAllBook(): Promise<GetBook[]> {
    const result = await BookRepository.findAll();
    const formattedResult: GetBook[] = result.map((book) => ({
      id_book: book.id_book,
      title: book.title,
      alt_title: book.alt_title,
      writer: book.writer,
      cover_image: book.cover_image,
      price: book.price,
      olid: book.olid,
      tags: book["tags"]
        ? book["tags"].map((tag: { tag: string }) => tag.tag)
        : ["sad"],
    }));

    return formattedResult;
  }

  static async createBook(data: AddBook): Promise<BookInterface> {
    const result = await BookRepository.create(data);
    return result;
  }
}
