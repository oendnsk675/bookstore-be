import { UserInterface } from "../database/entity/user";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class UserService {
  static async signUp(data: UserInterface): Promise<UserInterface> {
    data.password = bcrypt.hashSync(data.password, 8);
    const existingCustomer = await UserRepository.findUserByEmail(data.email);
    if (existingCustomer) {
      throw new Error("Account already exists");
    }

    const user = await UserRepository.create(data);
    return user;
  }

  static async signIn(data: UserInterface): Promise<string> {
    const user = await UserRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error("User not found");
    }
    let checkPassword = bcrypt.compareSync(data.password, user.password);

    if (!checkPassword) {
      throw new Error("Incorrect password");
    }
    let key = jwt.sign({ id: user.id_user }, "bookstore", {
      expiresIn: 86400, // 24 hours
    });

    return key;
  }
}
