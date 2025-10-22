import React from "react";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] mx-24 p-5 flex gap-5  overflow-x-scroll"
    >
      {data.data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.id} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.id} data={elem} />;
        }
        if (elem.completed) {
          return <CompletedTask key={elem.id} data={elem} />;
        }
        if (elem.failed) {
          <FailedTask key={task.id} data={elem.id} />;
        }
      })}
    </div>
  );
};

export default TaskList;
