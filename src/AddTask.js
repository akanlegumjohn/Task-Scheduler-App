import { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text && !day) {
      alert("Please enter text");
    }
    props.addTask({ text, day });

    // Refreshes the form inputs to default
    setText("");
    setDay("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Enter the task: </label>
      <input
        className="input"
        type="text"
        placeholder="eg: Homework"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <label>Enter the day:</label>
      <input
        onChange={(e) => setDay(e.target.value)}
        value={day}
        className="input"
        type="text"
        placeholder="eg: Mon, 7th May at 4:00 PM "
      />
      <input
        className="submit"
        type="submit"
        value="Save Task"
        onClick={props.addTask}
      />
    </form>
  );
};

export default AddTask;
