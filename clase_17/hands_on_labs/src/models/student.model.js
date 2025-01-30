import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  grade: { type: Number, required: true },
  group: { type: String, required: true },
});

studentSchema.plugin(mongoosePaginate);

export const studentModel = model("student", studentSchema);

// Ejemplo de uso
// studentModel.paginate({ group: "A1"}, { page: 1, limit: 10 })
// studentModel.paginate({ first_name: "Arturo"}, { page: 1, limit: 10 })
