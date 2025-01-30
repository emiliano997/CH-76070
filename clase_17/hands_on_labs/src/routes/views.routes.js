import { Router } from "express";

import { studentModel } from "../models/student.model.js";

export const viewsRouter = Router();

viewsRouter.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const students = await studentModel.paginate(
      {},
      { page: Number(page), limit: Number(limit) }
    );
    console.log(students);

    res.render("students", { students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

viewsRouter.get("/api/students", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const students = await studentModel.paginate(
      {},
      { page: Number(page), limit: Number(limit) }
    );

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
