// import crypto from "crypto"; // ES Module: Debemos definir el type: module en el package.json
const crypto = require("crypto"); // CommonJS: Por defecto trabaja con CommonJS

class UsersManager {
  static USERS = [];

  static createUser({ name, lastName, username, password }) {
    const hashPassword = crypto
      .createHash("sha256", "s3cr3t")
      .update(password)
      .digest("base64");

    UsersManager.USERS.push({
      name,
      lastName,
      username,
      password: hashPassword,
    });

    return { user: { name, lastName, username } };
  }

  static showUsers() {
    return UsersManager.USERS;
  }

  static login({ username, password }) {
    const user = UsersManager.USERS.find((user) => user.username === username);

    if (!user) {
      return "User not found";
    }

    const hashPassword = crypto
      .createHash("sha256", "s3cr3t")
      .update(password)
      .digest("base64");

    if (user.password !== hashPassword) {
      return "Invalid password";
    }

    return "Login success";
  }
}

UsersManager.createUser({
  name: "Juan",
  lastName: "Perez",
  username: "juanperez",
  password: "123456",
});

console.log(UsersManager.showUsers());

console.log(
  UsersManager.login({
    username: "juanperez",
    password: "123456",
  })
);
