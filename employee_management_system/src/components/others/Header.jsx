import React from "react";

const Header = ({ data, changeUser }) => {
  const userName = data?.firstName || "admin";

  const handelLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    changeUser("");
  };

  return (
    <header className="flex px-24 justify-between pt-20">
      <h1 className="text-white  text-3xl">
        hello <br />{" "}
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={handelLogOut}
        className="bg-red-600  hover:bg-red-700 transition-colors duration-200 text-white h-10 px-4 rounded-2xl text-md font-semibold"
      >
        logOut
      </button>
    </header>
  );
};

export default Header;
