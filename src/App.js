import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import Done from "./components/Done.js";

function App() {
  const [tasks, setTasks] = React.useState(() => {
    try {
      const savedTasks = localStorage.getItem("uncompleted-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (e) {
      console.error("Ошибка чтения localstorage:", e);
      return [];
    }
  });

  const [doneTasks, setDoneTasks] = React.useState(() => {
    try {
      const savedTasks = localStorage.getItem("completed-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (e) {
      console.error("Ошибка чтения localstorage:", e);
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("uncompleted-tasks", JSON.stringify(tasks));
      localStorage.setItem("completed-tasks", JSON.stringify(doneTasks));
    } catch (e) {
      console.error("Ошибка сохранения в localstorage:", e);
    }
  }, [tasks, doneTasks]);

  const addTask = async (text) => {
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
