import DoneTask from "./DoneTask";

function Done({tasks, onDeleteTask}) {
  return (
    <div className="done">
      <p className="done__info">Done - {tasks.length}</p>
      <div className="done__list">
        {tasks.map((task) => (
          <DoneTask
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Done;
