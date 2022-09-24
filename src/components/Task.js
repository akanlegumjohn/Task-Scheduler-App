import { useState, useContext } from "react";

import { provider } from "../TaskScheduler";
const Task = (props) => {
  const { deleteTask } = useContext(provider);
  const [taskStatus, setTaskStatus] = useState(true);
  const changeStatus = () => {
    setTaskStatus(!taskStatus);
  };
  return (
    <div>
      <h3 key={props.task.id}>
        {props.task.text}{" "}
        <span className="btn--group">
          <button
            style={{ backgroundColor: taskStatus ? "darkslateblue" : "green" }}
            className="to--do--btn"
            onClick={changeStatus}
          >
            {taskStatus ? "TO-DO" : "DONE"}
          </button>
          <button
            className="delete--btn"
            onClick={() => deleteTask(props.task.id)}
          >
            X
          </button>
        </span>
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};

export default Task;
