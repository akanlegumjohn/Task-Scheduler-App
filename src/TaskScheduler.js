import "./App.css";

import { useState } from "react";
import AllTasks from "./components/AllTasks";
import { Header } from "./components/Header";
import AddTask from "./AddTask";

function TaskScheduler() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Home work", day: "Tue 6th May at 2:00PM" },
    { id: 2, text: "Watch football match", day: "Mon 5th May at 3:15PM" },
    { id: 3, text: "Visit a friend", day: "Wed 7th May at 9:00AM" },
  ]);
  const [showTask, setShowTask] = useState(false);

  // Delete tasks

  const deletetask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const displayForm = () => {
    setShowTask(!showTask);
  };
  const addTask = (task) => {
    const newId = Math.round(Math.random() * 10000) + 1;
    const newTask = { ...task, newId };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header displayForm={displayForm} showTask={showTask} />
      {showTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <AllTasks tasksToDisplay={tasks} onDelete={deletetask} />
      ) : (
        <h3 className="empty--container">OOPS!! There are no tasks yet.</h3>
      )}
    </div>
  );
}

export default TaskScheduler;
