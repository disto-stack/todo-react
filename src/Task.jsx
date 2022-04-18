import { useState } from 'react';

import PropTypes from 'prop-types';
import { getTaskById, saveTaskByIndex } from './localstorage/helpers';

function Task({ id, isCompleted, name }) {
  const [completed, setCompleted] = useState(isCompleted);

  const updateTaskList = () => {
    setCompleted(!completed);

    const taskIndex = getTaskById(id);

    saveTaskByIndex({ id, name, isCompleted: !completed }, taskIndex);
  };

  return (
    <article className="task">
      <input
        className="task-checkbox"
        type="checkbox"
        name="taskIsCompleted"
        checked={completed}
        onChange={updateTaskList}
      />
      <span className={`task-text ${completed ? 'task-completed' : ''}`}>
        {name}
      </span>
    </article>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Task;
