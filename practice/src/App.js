import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // Whether dark mode Enabled or not

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.background = "#33373b";
    } else {
      setDarkMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        home="Home"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> --> For Default Value*/}
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyz Below" mode={darkMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
