import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

productRouter.post("/", async (req, res) => {
  const { name, price, stock, description } = req.body;

  if (!name || !price || !stock || !description) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        stock,
        description,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
