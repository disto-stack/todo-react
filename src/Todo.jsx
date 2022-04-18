import './App.css';

import Navbar from './Navbar';
import Task from './Task';

function Todo() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
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
      </main>

      <Task isCompleted={false} name="Task number 1" />
      <Task isCompleted name="Task number 3" />
      <Task isCompleted name="Task number 2" />
    </div>
  );
}

export default Todo;
