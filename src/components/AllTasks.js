import { useContext } from "react";
import { provider } from "../TaskScheduler";
import Task from "./Task";

const AllTasks = () => {
  const { tasks } = useContext(provider);

  return (
    <div className="main--div">
      <div className="tasks--container">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
