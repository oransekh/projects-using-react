import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);
  console.log(loggedInUserData.tasks);
  const { admin, employees } = userData;

  const handelLogin = (email, password) => {
    const adminData = admin.find(
      (admin) => admin.email === email && admin.password
    );
    if (adminData) {
      setUser("admin");
    } else if (userData) {
      const employeeData = employees.find(
        (employee) => employee.email === email && employee.password === password
      );

      if (employeeData) {
        setUser("employee");
        setLoggedInUserData(employeeData);
      }
    } else {
      console.log("login poblem");
    }
  };

  return (
    <>
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <p>No user type found</p>
      )}
    </>
  );
};

export default App;
