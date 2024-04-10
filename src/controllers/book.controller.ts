import { Request, Response } from "express";
import BookService from "../service/book.service";

export default class BookController {
  public async getAllBook(req: Request, res: Response): Promise<Response> {
    try {
      const result = await BookService.getAllBook();

      return res.status(201).json({
        message: "Successfully retrirved the book",
        data: result,
      });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const result = await BookService.createBook(req.body);

      return res.status(201).json({
        message: "Successfully created the book.",
        data: result,
      });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(500).json({
        message,
      });
    }
  }
}
