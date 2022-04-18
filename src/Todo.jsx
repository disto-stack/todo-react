import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './App.css';
import { loadTasks, saveTaskOnLocalstorage } from './localstorage/helpers';

import Navbar from './Navbar';
import TasksList from './TasksList';

function Todo() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(loadTasks());
  const [searchParams] = useSearchParams();

  const searchParamValue = searchParams.get('ref');

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

        setNewTask('');
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
        {searchParamValue !== 'completed' ? (
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
        ) : null}

        <section className="task-section">
          <TasksList filter={searchParamValue} tasks={tasks} />
        </section>
      </main>
    </div>
  );
}

export default Todo;
