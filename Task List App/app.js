const app = Vue.createApp({
  data() {
    return {
      newTask: {
        description: '',
        deadline: ''
      },
      tasks: [],
      filter: 'all'
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks;
      } else if (this.filter === 'active') {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks.filter(task => task.completed);
      }
    }
  },
  methods: {
    addTask() {
      if (this.newTask.description && this.newTask.deadline) {
        this.tasks.push({
          description: this.newTask.description,
          deadline: this.formatDeadline(this.newTask.deadline),
          completed: false
        });
        this.newTask.description = '';
        this.newTask.deadline = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    formatDeadline(deadline) {
      const date = new Date(deadline);
      return date.toLocaleString();
    },
    isPastDue(deadline) {
      const date = new Date(deadline);
      return date < new Date();
    },
    filterTasks(type) {
      this.filter = type;
    }
  }
});

app.mount('#app');
