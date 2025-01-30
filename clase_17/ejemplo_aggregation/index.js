import { connect } from "mongoose";

import { orderModel } from "./models/order.model.js";

const uri = "mongodb://localhost:27017/clase_17";

async function main() {
  try {
    await connect(uri);

    // Insert Many
    // const result = await orderModel.insertMany([
    //   {
    //     name: "Pepperoni",
    //     size: "small",
    //     price: 19,
    //     quantity: 10,
    //     date: "2021-05-01",
    //   },
    //   {
    //     name: "Pepperoni",
    //     size: "medium",
    //     price: 20,
    //     quantity: 20,
    //     date: "2021-05-02",
    //   },
    //   {
    //     name: "Pepperoni",
    //     size: "large",
    //     price: 21,
    //     quantity: 30,
    //     date: "2021-05-03",
    //   },
    //   {
    //     name: "Cheese",
    //     size: "small",
    //     price: 12,
    //     quantity: 15,
    //     date: "2021-05-04",
    //   },
    //   {
    //     name: "Cheese",
    //     size: "medium",
    //     price: 13,
    //     quantity: 50,
    //     date: "2021-05-05",
    //   },
    //   {
    //     name: "Cheese",
    //     size: "large",
    //     price: 14,
    //     quantity: 10,
    //     date: "2021-05-06",
    //   },
    //   {
    //     name: "Vegan",
    //     size: "small",
    //     price: 17,
    //     quantity: 10,
    //     date: "2021-05-07",
    //   },
    //   {
    //     name: "Vegan",
    //     size: "medium",
    //     price: 18,
    //     quantity: 10,
    //     date: "2021-05-08",
    //   },
    // ]);

    // console.log(result);
    const size = "medium";
    const result = await orderModel.aggregate([
      {
        // Stage 1: Obtener pizzas por su tamaño
        $match: {
          size,
        },
      },
      {
        // Stage 2: Agrupar por nombre de pizza
        $group: {
          _id: "$name",
          total: { $sum: "$quantity" },
        },
      },
      {
        // Stage 3: Ordenar por cantidad total de ventas
        $sort: {
          total: -1,
        },
      },
      {
        // Stage 4: Agrupar las ordenes en un unico documento
        $group: {
          _id: 1, // Crea un nuevo id
          orders: {
            $push: "$$ROOT", // $$ROOT: Documento actual
          },
        },
      },
      {
        // Stage 5: Proyectar un nuevo documento
        $project: {
          _id: 0,
          orders: "$orders",
          date: new Date(),
        },
      },
      {
        // Stage 6: Almacenar el resultado en una nueva colección
        $merge: {
          into: "reports",
        },
      },
    ]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
