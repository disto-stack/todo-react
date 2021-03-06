import { useContext, useState } from 'react';

import PropTypes from 'prop-types';
import {
  getTaskById,
  saveTaskByIndex,
  deleteTaskById,
} from './localstorage/helpers';

import TasksContext from './context/TasksContext';

function Task({ id, isCompleted, name, toDelete }) {
  const [completed, setCompleted] = useState(isCompleted);
  const rerenderTasks = useContext(TasksContext);

  const markTaskAsCompleted = () => {
    setCompleted(!completed);

    const taskIndex = getTaskById(id);
    saveTaskByIndex({ id, name, isCompleted: !completed }, taskIndex);

    rerenderTasks();
  };

  const deleteTask = () => {
    deleteTaskById(id);

    rerenderTasks();
  };

  return (
    <article className="task">
      <input
        className="task-checkbox"
        type="checkbox"
        name="taskIsCompleted"
        checked={completed}
        onChange={markTaskAsCompleted}
      />
      <span className={`task-text ${completed ? 'task-completed' : ''}`}>
        {name}
      </span>

      {isCompleted && toDelete ? (
        <button
          className="delete-button-icon"
          type="button"
          onClick={deleteTask}
        >
          <span className="material-icons">delete</span>
        </button>
      ) : null}
    </article>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  toDelete: PropTypes.bool,
};

Task.defaultProps = {
  toDelete: false,
};

export default Task;
