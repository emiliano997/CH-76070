import { UsersManager } from "./UsersManager.js";

async function main() {
  const usersManager = new UsersManager("./db/users.json");

  try {
    const user = {
      name: "Javier",
      lastName: "Apiricio",
      age: 30,
      course: "Frontend React",
    };

    const newUser = await usersManager.createUser(user);

    console.log("New user created", newUser);

    console.log("Users", usersManager.getUsers());
  } catch (error) {
    console.error("Error", error);
  }
}

main();
