import React from "react";
import "./button.css";

const styles = [
    "btn--primary--solid"
]

const sizes = ["btn--medium"]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = styles.includes(buttonStyle) 
    ? buttonStyle 
    : styles[0];


    const checkButtonSize = sizes.includes(buttonSize) 
    ? buttonSize 
    : sizes[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}