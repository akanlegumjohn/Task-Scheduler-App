import Task from "./Task";

const AllTasks = (props) => {
  return (
    <div className="main--div">
      <div className="tasks--container">
        {props.tasksToDisplay.map((task) => (
          <Task task={task} onDelete={props.onDelete} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
