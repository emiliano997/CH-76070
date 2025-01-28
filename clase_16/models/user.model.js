import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
    // Indice simple
    index: true,
  },
});

// Indice compuesto
userSchema.index({ first_name: 1, last_name: 1, email: 1 });
// userSchema.index({ email: "text" });

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.email.includes("@") || !user.email.includes(".")) {
    throw new Error("Invalid email");
  }

  next();
});

export const userModel = model("user", userSchema);
