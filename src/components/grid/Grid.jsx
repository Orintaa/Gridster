// import React from "react";
import { gridCreating } from "../../assets/utils/gridCreating";
// import { Rows } from "../rows/Rows";
// import { Cols } from "../cols/Cols";


export const Grid = () => {
    const squares = gridCreating(10, 10);
    // const squares = <Cols />
    console.log(squares);
    return (
        <div className="grid-container">
            <div id="grid">test</div>
            { squares }       
        </div>
    )
}