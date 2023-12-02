import { useState } from "react";
import "./App.css";
// import React from 'react';

function Car(props) {
  return <h2> This is the color {props.color} Car</h2>;
}

function football(props) {
  alert(props);
}

// If and else
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  // if (isGoal) {
  //   return <MadeGoal />;
  // }
  // return <MissedGoal />;

  //ternary operator
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

//UseState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // e is a synthetic event
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function MyOption() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

function MyTextarea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}

function App() {
  const name = "red";
  return (
    <div className="App">
      <h1> Hello World !! </h1>

      <Car color={name} />

      <button onClick={() => football("Goal!")}> "Take a shoot !"</button>

      <Goal isGoal={true} />

      <MyForm />

      <MyTextarea />

      <MyOption />
    </div>
  );
}
export default App;
