import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  topics: {
    type: Array,
    default: [],
    validate: {
      validator: (value) => value.length > 0,
      message: "Course must have at least one topic",
    },
  },
  professor: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  students: {
    type: [
      {
        user: { type: Schema.Types.ObjectId, ref: "user" },
        grade: { type: Number, min: 0, max: 10 },
      },
    ],
    default: [],
  },
});

courseSchema.pre("findOne", function () {
  this.populate("professor");
  this.populate("students.user");
})

export const courseModel = model("course", courseSchema);
