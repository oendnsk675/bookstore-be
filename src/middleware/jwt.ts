import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

require("dotenv").config();

export function verifyToken(
  req: Request & { id_user?: number },
  res: Response,
  next: NextFunction
) {
  let token = req.headers["authorization"]?.split("Bearer ")[1];

  if (!token) {
    return res.status(403).send({
      msg: `No token provided!`,
    });
  }

  try {
    const key = process.env.JWT_KEY;
    // Verifikasi token
    const decoded = jwt.verify(token, key!) as JwtPayload;
    (req as any).id_user = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
}
