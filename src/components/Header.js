import "../App.css";
import { useContext } from "react";
import { provider } from "../TaskScheduler";
const Header = () => {
  const { displayForm, showTask } = useContext(provider);
  return (
    <div className="header--div">
      <header className="app--header">
        <h1>Tasks Scheduler</h1>
        <button className="add--task--btn" onClick={displayForm}>
          {showTask ? "Close " : "Add Tasks"}
        </button>
      </header>
    </div>
  );
};
export default Header;
