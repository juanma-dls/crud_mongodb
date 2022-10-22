import { Router } from "express";
import Task from "../models/Task";
import TaskController from "../controllers/task.controller";

const router = Router();
const taskController = new TaskController()

router.get("/", taskController.renderTask);

router.post("/task/add", taskController.addTask);

router.get("/tasks/:id/edit", taskController.renderTaskEdit);

router.post("/tasks/:id/edit", taskController.editTask);

router.get("/tasks/:id/delete", taskController.deleteTask);

router.get("/tasks/:id/togglefinish", taskController.finishTask);


export default router