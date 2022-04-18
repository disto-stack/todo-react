import { useState } from 'react';

import PropTypes from 'prop-types';

function Task({ isCompleted, name }) {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <article>
      <input type="checkbox" name="taskIsCompleted" checked={completed} />
      <span>{name}</span>
    </article>
  );
}

Task.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Task;
