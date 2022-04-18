import { useState } from 'react';

import PropTypes from 'prop-types';

function Task({ isCompleted, name }) {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <article className="task">
      <input
        className="task-checkbox"
        type="checkbox"
        name="taskIsCompleted"
        checked={completed}
        onChange={() => {
          setCompleted(!completed);
        }}
      />
      <span className="task-text task-completed">{name}</span>
    </article>
  );
}

Task.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Task;
