import React from "react";

const Header = () => {
  return (
    <header className="flex px-24 justify-between pt-20">
      <h1 className="text-white  text-3xl">
        hello <br /> <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <button className="bg-red-600  hover:bg-red-700 transition-colors duration-200 text-white h-10 px-4 rounded-2xl text-md font-semibold">
        logOut
      </button>
    </header>
  );
};

export default Header;
