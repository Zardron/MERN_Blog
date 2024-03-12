import { errorHandler } from "../middleware/error.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required!"));
  }

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    return next(errorHandler(400, "Email is already exist!"));
  }

  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
