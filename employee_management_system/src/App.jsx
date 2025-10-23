import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);
  const { admin, employees } = userData;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    const adminData = admin.find(
      (admin) => admin.email === email && admin.password
    );

    if (adminData) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employeeData = employees.find(
        (employee) => employee.email === email && employee.password === password
      );

      if (employeeData) {
        setUser("employee");
        setLoggedInUserData(employeeData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employeeData })
        );
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
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : (
        <p>No user type found</p>
      )}
    </>
  );
};

export default App;
