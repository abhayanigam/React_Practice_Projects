import "./App.css";

const element = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

function App() {
  return (
    <div className="App">
      <h1> Hello World ! </h1>
      <p>{element}</p>
    </div>
  );
}

export default App;
