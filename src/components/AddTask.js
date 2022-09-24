import { useState } from "react";

const AddTask = (props) => {
  const [taskData, setTaskData] = useState({ text: "", day: "" });

  const handleInput = (event) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskData.text && !taskData.day) {
      alert("Please enter text");
    } else {
      props.addTask(taskData);
    }
    setTaskData({ text: "", day: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="text">Enter the task </label>
      <input
        type="text"
        id="text"
        placeholder="eg: Homework"
        onChange={handleInput}
        value={taskData.text}
        className="input"
        name="text"
      />
      <label htmlFor="day">Enter the day</label>
      <input
        type="text"
        id="day"
        onChange={handleInput}
        value={taskData.day}
        className="input"
        placeholder="eg: Mon, 7th May at 4:00 PM "
        name="day"
      />
      <button className="submit" onClick={() => props.addTask}>
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
