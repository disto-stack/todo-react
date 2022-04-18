import { useCallback, useState } from 'react';
import './App.css';

import { loadTasks, saveTaskOnLocalstorage } from './localstorage/helpers';

import Navbar from './Navbar';
import Task from './Task';

function Todo() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(loadTasks());

  const addNewTask = useCallback(
    (event) => {
      if (newTask !== '') {
        event.preventDefault();

        const taskToCreate = {
          id: Date.now(),
          name: newTask,
          isCompleted: false,
        };

        const newTaskList = [...tasks, taskToCreate];

        setTasks(newTaskList);
        saveTaskOnLocalstorage(newTaskList);
      }
    },
    [tasks, newTask]
  );

  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">#todo</h1>
        <Navbar />
      </header>

      <main>
        <form className="app-form" onSubmit={addNewTask}>
          <label htmlFor="newTask">
            <input
              type="text"
              id="newTask"
              name="newTask"
              placeholder="Add details"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </label>
          <button className="submit-button" type="submit">
            Add
          </button>
        </form>

        <section className="task-section">
          {tasks.map((task) => (
            <Task
              isCompleted={task.isCompleted}
              key={task.id}
              id={task.id}
              name={task.name}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Todo;
