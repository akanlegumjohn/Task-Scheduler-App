import { useState, createContext } from "react";
import AllTasks from "./components/AllTasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import "./App.css";

export const provider = createContext();
function TaskScheduler() {
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([
    { id: id, text: "Home work", day: "Tue 6th May at 2:00PM" },
  ]);
  const [showTask, setShowTask] = useState(false);

  // Delete tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const displayForm = () => {
    setShowTask(!showTask);
  };
  const addTask = (task) => {
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
    setId((prevId) => prevId + 1);
    console.log(task);
  };

  return (
    <provider.Provider value={{ tasks, deleteTask, displayForm, showTask }}>
      <Header />
      {showTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <AllTasks />
      ) : (
        <h3 className="empty--container">OOPS!! There are no tasks yet.</h3>
      )}
    </provider.Provider>
  );
}

export default TaskScheduler;
