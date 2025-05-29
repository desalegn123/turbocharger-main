// Function to add a task
export const addTask = (tasks, task) => {
  if (task) {
    return [...tasks, task];
  }
  return tasks;
};

// Function to remove a task
export const removeTask = (tasks, index) => {
  return tasks.filter((_, i) => i !== index);
};

// Function to clear all tasks
export const clearTasks = () => {
  return [];
};