// import { TaskManager as manager } from "./TaskManager.js";
// import TaskManager from "./TaskManager.js"; // Export default
import { TaskManager } from "./TaskManager.js"; // Export class

const promise = new Promise((resolve, reject) => {
  reject("Error");
});

async function main() {
  const manager = new TaskManager();

  await manager.loadTasks();

  // Promise.all([
  //   manager.loadTasks(),
  //   fetch("https://jsonplaceholder.typicode.com/sdasd"),
  //   promise,
  // ])
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
}

main();

// Función autoinvocable
// (async () => {
//   const manager = new TaskManager();
//   console.log("Hello from main");

//   await manager.loadTasks();

//   console.log(manager.getTasks());
// })();
