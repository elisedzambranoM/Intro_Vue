const app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: "",
    errorMessage: "",
  },
  methods: {
    addTask() {
      let lowerTasks = this.tasks.map((task) =>
        task.toLowerCase().replace(" ", "")
      );
      if (!lowerTasks.includes(this.newTask.toLowerCase().replace(" ", ""))) {
        this.tasks.push(this.newTask);
        this.errorMessage = "";
      } else {
        this.errorMessage = "La tarea ya existe, no se puede agregar";
      }
      this.newTask = "";
    },
    removeTask(index) {
      //const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },
  },
});
