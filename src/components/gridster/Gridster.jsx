import { GridGenerator } from "../gridGenerator/GridGenerator";
import { Grid } from "../grid/Grid";
import {useState} from "react";
import "./gridster.css";
import logo from "../../assets/images/logo.png";

const DEFAULT_CELL_COUNT = 10;

export const Gridster = () => {
    const [matrix, setMatrix] = useState({
        rowCount: DEFAULT_CELL_COUNT,
        columnCount: DEFAULT_CELL_COUNT,
    })

    return (
        <div className="gridster">
            <img id="logo" src={logo} alt={""}></img>
        <GridGenerator matrix={matrix} setMatrix={setMatrix}/>
        <Grid rowCount={matrix.rowCount} colCount={matrix.columnCount}/>
        </div>
    )
}