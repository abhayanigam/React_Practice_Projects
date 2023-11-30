// import ReactDOM from "react-dom/client";
// This version is used specifically for server-side rendering (SSR).
import "./App.css";

// This is a functional React component named App
function App() {
  return (
    <div className="App">
      <h1> Hello World !! </h1>
    </div>
  );
}

// Note : DOM (Document Object Model) is a platform and language-neutral interface
//        that allows programs and scripts to dynamically access and update the content.

// You can also run without these lines
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<App />); //renders the App component into the root created using createRoot

export default App; // component, making it available for use in other parts of the application.
