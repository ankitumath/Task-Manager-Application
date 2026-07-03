import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.use(protect);

router.route("/")
  .post(createTask)
  .get(getTasks);

router.route("/:id")
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;