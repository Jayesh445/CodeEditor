import React from "react";

const RunButton = () => {
  return (
    <button
      className={`px-4 mx-2 my-2 py-2 font-bold border-2 border-green-600  ring-inset ring-2  ring-white bg-green-600 text-white rounded-full  hover:bg-green-700`}
    ><span className="text-center">

      <img src={`../.././play-logo.png`} alt="" width={20} className="inline mx-auto align-top  filter invert" /> RunButton
    </span>
    </button>
  );
};

export default RunButton;
