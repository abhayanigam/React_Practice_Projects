import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" home="Home" />
      {/* <Navbar /> --> For Default Value*/}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyz below" />
      </div>
    </>
  );
}

export default App;
