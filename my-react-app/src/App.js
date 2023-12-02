import "./App.css";
// import React from 'react';

function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <div className="App">
      <h1> Hello World !! </h1>
      {/* Using styling */}
      <h1 style={{ backgroundColor: "lightblue" }}> Hello Style</h1>
      <h1 style={{ color: "red" }}> Hello Style</h1>
      <h1 style={myStyle}> Custom Style</h1>
    </div>
  );
}
export default App;
