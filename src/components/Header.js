import "../App.css";
export const Header = (props) => {
  return (
    <div className="header--div">
      <header className="app--header">
        <h1>Tasks Scheduler</h1>
        <button className="add--task--btn" onClick={props.displayForm}>
          {props.showTask ? "Close " : "Add Tasks"}
        </button>
      </header>
    </div>
  );
};
