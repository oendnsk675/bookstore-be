import { User, UserInterface } from "../database/entity/user";

export class UserRepository {
  static async findUserByEmail(email: string): Promise<User | null> {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  static async create(data: UserInterface): Promise<User> {
    // Database operation to create a new user
    const user = await User.create(data);
    return user;
  }
}
