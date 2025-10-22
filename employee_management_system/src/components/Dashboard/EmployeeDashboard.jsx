import React from "react";
import Header from "../others/Header";
import TaskListNamber from "../others/TaskListNamber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (data) => {
  return (
    <main className="h-screen w-screen bg-[#1c1c1c] ">
      <Header data={data} />
      <TaskListNamber data={data} />
      <TaskList data={data} />
    </main>
  );
};

export default EmployeeDashboard;
