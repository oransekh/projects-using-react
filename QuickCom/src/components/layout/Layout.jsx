import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../Auth/Login.jsx";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const isOpen = useSelector((state) => state.auth.openForm);
  const isActive = useSelector((state) => state.auth.loginStatus);

  console.log("Layout - isOpen:", isOpen);
  console.log("Layout - isActive:", isActive);
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
      {!isActive && isOpen && <Login />}
      <Footer />
    </div>
  );
};

export default Layout;
