import React, { useState } from "react";
import "./input.css";
import RandomNumber from "../../assets/utils/RandomNumber";

export const Input = ({label}) => {
  const [inputState, setInputState] = useState();
//   const [inputState, setInputState] = useState(RandomNumber());

    const randomizeValue = () => {
        setInputState(RandomNumber());
    };

  return (
    <form class="form">
      <div class="form-container">
        <label class="label">{label}</label>
        <input
          class="input"
          type="text"
          value={inputState}
          onChange={(e) => {
            setInputState(e.target.value);
          }}
        />
      </div>
    </form>
  );
};
