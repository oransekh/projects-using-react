import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../Auth/Login.jsx";
import { useSelector } from "react-redux";


const Layout = () => {
  const isOpen = useSelector((state) => state.auth.isLoginOpen);
  return (
    <div>
      <Header />
      <Outlet />
      {isOpen && <Login />}
      <Footer />
    </div>
  );
};

export default Layout;
