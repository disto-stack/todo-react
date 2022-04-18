export const loadTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

export const saveTaskOnLocalstorage = (tasks) => {
  if (localStorage.getItem('tasks')) {
    localStorage.removeItem('tasks');
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTaskById = (taskId) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  return tasks.findIndex((task) => task.id === taskId);
};

export const saveTaskByIndex = (task, taskIndex) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (tasks.length === 0) {
    tasks.push(task);
  } else if (tasks.length > 0) {
    tasks[taskIndex] = task;
  }

  saveTaskOnLocalstorage(tasks);
};
