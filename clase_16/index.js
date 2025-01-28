import mongoose from "mongoose";

import { userModel } from "./models/user.model.js";
import { courseModel } from "./models/course.model.js";

const uri = "mongodb://localhost:27017/clase_16";

async function main_index() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const users = await userModel.find({}).explain("executionStats");

    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

async function main_populate() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // const professor = await userModel.findOne({
    //   first_name: "Vlad",
    // });

    // const course = await courseModel.create({
    //   title: "Programación Backend I",
    //   description: "Curso de Backend Parte 1",
    //   difficulty: "Intermediate",
    //   professor: professor._id,
    //   topics: ["Backend", "JavaScript", "MongoDB"],
    // });

    // const course = await courseModel
    //   .findOne({
    //     _id: "67982a26018520614c9de839",
    //   })
    //   .populate("professor");

    // const mathew = await userModel.findOne({ first_name: "Mathew" });
    // const sayer = await userModel.findOne({ first_name: "Sayer" });

    // course.students.push({
    //   user: mathew._id,
    //   grade: 10,
    // });

    // course.students.push({
    //   user: sayer._id,
    //   grade: 6,
    // });

    // const updatedCourse = await course.save();

    // console.log(updatedCourse);

    const course = await courseModel.findOne({
      _id: "67982a26018520614c9de839",
    });

    const user = await userModel.create({
      first_name: "Emiliano",
      last_name: "Gomez",
      email: "emiliano@gmail.com",
      gender: "Male",
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

main_populate();
