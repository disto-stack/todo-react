import { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Task from './Task';

const loadTasks = () => [
  {
    id: Date.now(),
    isCompleted: true,
    name: 'Task 2',
  },
  {
    id: Date.now(),
    isCompleted: false,
    name: 'Task 1',
  },
  {
    id: Date.now(),
    isCompleted: true,
    name: 'Task 3',
  },
];

function Todo() {
  const [tasks, setTasks] = useState(loadTasks());

  return (
    <div className="app-container">
      <header>
        <h1 className="app-title">#todo</h1>
        <Navbar />
      </header>

      <main>
        <form className="app-form">
          <label htmlFor="newTask">
            <input
              type="text"
              id="newTask"
              name="newTask"
              placeholder="Add details"
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
              key={task.name}
              name={task.name}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Todo;
