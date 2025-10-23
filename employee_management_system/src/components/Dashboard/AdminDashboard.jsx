import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="h-screen w-full">
      <Header changeUser={changeUser} />
      <CreateTask />
    </div>
  );
};

export default AdminDashboard;
