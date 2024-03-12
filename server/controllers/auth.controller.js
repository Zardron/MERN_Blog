import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(401).json({ message: "All fields are required!" });
  }

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    return res.status(401).json({ message: "User already exist!" });
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
    res.status(500).json(error);
  }
};
