import React from "react";
import Header from "../others/Header";
import TaskListNamber from "../others/TaskListNamber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = () => {
  return (
    <main className="h-screen w-screen bg-[#1c1c1c] ">
      <Header />
      <TaskListNamber />
      <TaskList />
    </main>
  );
};

export default EmployeeDashboard;
