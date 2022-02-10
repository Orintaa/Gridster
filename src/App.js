import "./App.css";
import logo from "./logo.png";
import {GridGenerator} from "./components/gridGenerator/GridGenerator";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt={""}></img>
        <GridGenerator/>
      </header>
    </div>
  );
}

export default App;
