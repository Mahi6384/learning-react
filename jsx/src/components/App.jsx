import React from "react";
import reactDom from "react-dom";


const App = () => {
  const buttonText =  'Click Me';
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text"></input>
    <button style = {{backgroundColor : 'blue', color:'white'}}>{buttonText}</button>
    </div>
  );
};

export default App; 