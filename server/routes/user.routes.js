import {
  deleteUsers,
  getUsers,
  newUsers,
  updateUsers,
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.route("/").get(getUsers).post(newUsers);
router.route("/:id").put(updateUsers).delete(deleteUsers);

export default router;
