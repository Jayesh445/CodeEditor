import React from "react";
import LanguageButton from "./LanguageButton";
import RunButton from "./RunButton";

const Header = () => {
  return (
    <div >
      <nav className="w-full border-2 border-gray-800 rounded-lg lg:grid grid-cols-2 content-start place-items-start sm:flex sm:flex-col">
        <LanguageButton />
        <RunButton />
      </nav>
    </div>
  );
};

export default Header;
