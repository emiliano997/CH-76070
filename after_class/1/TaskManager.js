export class TaskManager {
  tasks = [];

  constructor() {}

  async loadTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // this.tasks = data;
    return data;
  }

  getTasks() {
    return this.tasks;
  }

  getNextId() {
    return this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
  }

  createTask({ title, userId, completed = false }) {
    if (!title || !userId) {
      console.error("Title and userId are required");
      return; // Esto corta la función
    }

    const newTask = {
      id: this.getNextId(),
      title,
      userId,
      completed,
    };

    this.tasks.push(newTask);

    console.log({ newTask });
  }
}

// Cuando se importa, es necesario poner el nombre tal cual
// export { TaskManager };

// Cuando se importa, puedo ponerle el nombre que uno quiera
// export default TaskManager;
