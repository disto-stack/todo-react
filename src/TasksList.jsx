import { useContext } from 'react';

import Task from './Task';

import TasksContext from './context/TasksContext';
import { deleteCompletedTasks } from './localstorage/helpers';

function TasksList({ filter, tasks }) {
  const rendererTasks = useContext(TasksContext);

  const deleteAllCompletedTasks = () => {
    deleteCompletedTasks();

    rendererTasks();
  };

  const renderTaksWithFilter = () => {
    if (filter === 'completed') {
      const filterTasks = tasks
        .filter((task) => task.isCompleted)
        .map((task) => (
          <Task
            isCompleted={task.isCompleted}
            key={task.id}
            id={task.id}
            name={task.name}
            toDelete
          />
        ));

      if (filterTasks.length > 0) {
        return (
          <div>
            <section className="completed-tasks">{filterTasks}</section>

            <button
              className="delete-button"
              type="button"
              onClick={deleteAllCompletedTasks}
            >
              <span className="material-icons">delete</span> Delete all
            </button>
          </div>
        );
      }

      return <p>You have task to do.</p>;
    }
    if (filter === 'active') {
      const filterTasks = tasks
        .filter((task) => !task.isCompleted)
        .map((task) => (
          <Task
            isCompleted={task.isCompleted}
            key={task.id}
            id={task.id}
            name={task.name}
          />
        ));

      if (filterTasks.length > 0) {
        return filterTasks;
      }

      return <p>Great work! you have not tasks to do.</p>;
    }

    if (tasks.length > 0) {
      return tasks.map((task) => (
        <Task
          isCompleted={task.isCompleted}
          key={task.id}
          id={task.id}
          name={task.name}
        />
      ));
    }

    return <p>You have not tasks</p>;
  };

  return renderTaksWithFilter();
}

export default TasksList;
