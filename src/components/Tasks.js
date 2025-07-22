import Task from "./Task";

function Tasks({tasks, onDeleteTask, onCompleteTask}) {
  return (
    <div className="tasks">
      <p className="tasks__info">Tasks to do - {tasks.length}</p>
      <div className="tasks_list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onComplete={() => onCompleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
