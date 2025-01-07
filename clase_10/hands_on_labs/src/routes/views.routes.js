import { Router } from "express";

export const viewsRouter = Router();

viewsRouter.get("/socket", (req, res) => {
  res.render("index", {});
});
