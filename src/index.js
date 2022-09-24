import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import TaskScheduler from "./TaskScheduler";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <TaskScheduler />
  </div>
);

reportWebVitals();
