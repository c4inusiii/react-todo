import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import Done from "./components/Done.js";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [doneTasks, setDoneTasks] = React.useState([]);

  const addTask = (text) => {
    setTasks([...tasks, {text, id: Date.now()}]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setDoneTasks(doneTasks.filter((task) => task.id !== id));
  };

  const markTaskAsCompleted = (id) => {
    deleteTask(id);
    let completedTask = tasks.find((task) => task.id === id);
    setDoneTasks([...doneTasks, completedTask]);
  };

  return (
    <div className="container">
      <Header placeholder={"Add a new task"} onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onCompleteTask={markTaskAsCompleted}
      />
      <Done tasks={doneTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
