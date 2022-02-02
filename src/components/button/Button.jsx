import React from "react";
import "./button.css";

export const Button = ({
    children,
    type,
    onClick,
}) => {
    return (
        <button className="btn" onClick={onClick} type={type}>
            {children}
        </button>
    )
}