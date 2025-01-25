import multer from "multer";
import path from "path";

import { __dirname } from "../dirname.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.split("/")[0] !== "image") {
      return cb("Sólo aceptamos imágenes");
    }

    cb(null, path.resolve(__dirname, "../public/img"));
  },
  filename: function (req, file, cb) {
    const { name } = req.body;

    if (!name) return cb("El campo name es requerido");

    cb(null, `${name}.${file.mimetype.split("/")[1]}`);
  },
});

export const uploader = multer({ storage });
