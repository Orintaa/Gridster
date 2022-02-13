import "./App.css";
// import logo from "./assets/images/logo.png";
// import {GridGenerator} from "./components/gridGenerator/GridGenerator";
// import {Grid} from "./components/grid/Grid";
import { Gridster } from "./components/gridster/Gridster";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img id="logo" src={logo} alt={""}></img> */}
        {/* <GridGenerator/> */}
        {/* <Grid/> */}
        <Gridster/>
      </header>
    </div>
  );
}

export default App;
