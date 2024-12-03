import fs from "node:fs";

export class UsersManager {
  path;
  users;

  constructor(path) {
    this.path = path;
    // Chequeamos si el archivo existe
    if (fs.existsSync(path)) {
      try {
        // Si existe lo leemos y lo parseamos
        this.users = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      } catch (error) {
        // Si hubo un error al leer el archivo, lo seteamos como vacío
        this.users = [];
      }
    } else {
      // Si no existe el archivo, lo seteamos como vacío
      this.users = [];
    }
  }

  async createUser({ name, lastName, age, course }) {
    const newId =
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;

    this.users.push({
      id: newId,
      name,
      lastName,
      age,
      course,
    });

    await this.save();

    return {
      name,
      lastName,
      age,
      course,
    };
  }

  async save() {
    try {
      // Guardamos el archivo
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.users, null, 2)
      );

      const users = await fs.promises.readFile(this.path, "utf-8");
      this.users = JSON.parse(users);
    } catch (error) {
      console.error("Error al guardar el archivo", error);
    }
  }

  getUsers() {
    return this.users;
  }
}
