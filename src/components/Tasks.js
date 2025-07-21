import React from "react";
import Task from "./Task";

function Tasks() {
  const [tasksCount, setTasksCount] = React.useState(4);
  const [showTask, setShowTask] = React.useState(true);

  return (
    <div className="tasks">
      <p className="tasks__info">Tasks to do - {tasksCount}</p>
      <Task taskTitle={"To study React fundamentals"} showTask={showTask} />
      <Task taskTitle={"To study React fundamentals"} showTask={showTask} />
      <Task taskTitle={"To study React fundamentals"} showTask={showTask} />
      <Task taskTitle={"To study React fundamentals"} showTask={showTask} />
    </div>
  );
}

export default Tasks;
