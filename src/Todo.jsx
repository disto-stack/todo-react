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
    <div>
      <header>
        <h1 className="app-title">#todo</h1>
        <Navbar />
      </header>

      <main>
        <br />
        <br />
        <form>
          <label htmlFor="newTask">
            <input
              type="text"
              id="newTask"
              name="newTask"
              placeholder="Add details"
            />
          </label>
          <button type="submit">Add</button>
        </form>

        <section>
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
