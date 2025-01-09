import { Router } from "express";

export const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
  res.render("index");
});

viewsRouter.get("/chat", (req, res) => {
  res.render("chat");
});
