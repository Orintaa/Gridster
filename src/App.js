// import {useRef} from "react";
import "./App.css";
import logo from "./logo.png";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { useState } from "react";

function App() {
  const logSomeText = () => {
    console.log("You Clicked on Me!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt={""}></img>

        <div class="grid-generator">
          {
            
          }
          {/* <Input label={"Rows"}/>
          <span class="span">x</span>
          <Input label={"Columns"}/>
          <Button onClick={logSomeText} type="button">
            Generate
          </Button> */}
        </div>

      </header>
    </div>
  );
}

export default App;
