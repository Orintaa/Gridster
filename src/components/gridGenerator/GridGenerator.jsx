import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
// import RandomNumber from "./assets/utils/RandomNumber.js";

class GridGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.firstInput = React.createRef();
        this.secondInput = React.createRef();
    }

    generate = () => {
        this.firstInput.randomizeValue();      
        this.secondInput.randomizeValue();       
  };

    render() {
    return (
      <div>
        <Input label={"Rows"} inputState={this.state.useState} setInputState={this.state.setInputState} ref={this.firstInput} />

        <Input label={"Columns"} inputState={this.state.useState} setInputState={this.state.setInputState} ref={this.secondInput}/>

        <Button onClick={this.generate} type="button"></Button>
      </div>
    );
  }
}

module.exports = GridGenerator;
