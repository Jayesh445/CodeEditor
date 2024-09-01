import React, { useEffect, useState } from "react";

const Editor = () => {
    const [text ,setText] = useState("");
    const [lineNumbers, setLineNumbers] = useState([]);
    useEffect(() =>{
        const lines = text.split("\n");
        setLineNumbers(lines.map((_,index) => index+1));
    },[text])
    const handleTextChange = (event) =>{
        setText(event.target.value);
    }
  return (
    <div className="flex ml-4">
    <div className={` text-gray-400 w-6 border-2 border-r-0 border-gray-700 m-0 `} >
        {lineNumbers.map((lineNumber) =>(
            <div key={lineNumber}>{lineNumber}</div>
        ))}
    </div>
      <textarea 
      name="editor-text-area" 
      className=" m-0 border-gray-700 border-2 border-l-1 border-l-gray-200 font-base h-600 overflow-hidden" cols={100} 
      rows={25}
      value={text}
      onChange={handleTextChange}
       ></textarea>
    </div>
  );
};

export default Editor;
