import Task from './Task';

function TasksList({ filter, tasks }) {
  const renderTaksWithFilter = () => {
    if (filter === 'completed') {
      return tasks
        .filter((task) => task.isCompleted)
        .map((task) => (
          <Task
            isCompleted={task.isCompleted}
            key={task.id}
            id={task.id}
            name={task.name}
          />
        ));
    }
    if (filter === 'active') {
      return tasks
        .filter((task) => !task.isCompleted)
        .map((task) => (
          <Task
            isCompleted={task.isCompleted}
            key={task.id}
            id={task.id}
            name={task.name}
          />
        ));
    }

    return tasks.map((task) => (
      <Task
        isCompleted={task.isCompleted}
        key={task.id}
        id={task.id}
        name={task.name}
      />
    ));
  };

  return renderTaksWithFilter();
}

export default TasksList;
