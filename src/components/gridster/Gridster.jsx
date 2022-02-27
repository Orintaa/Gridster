import logo from "../../assets/images/logo.png";
import "./gridster.css";
import { GridGenerator } from "../gridGenerator/GridGenerator";
import { Grid } from "../grid/Grid";
import {useState} from "react";

const DEFAULT_CELL_COUNT = 10;
export const Gridster = () => {
    const [matrix, setMatrix] = useState({
        rows: DEFAULT_CELL_COUNT,
        columns: DEFAULT_CELL_COUNT,
    })

    return (
        <div className="gridster">
            <img id="logo" src={logo} alt={""}></img>
        <GridGenerator matrix={matrix} setMatrix={setMatrix}/>
        <Grid rowCount={matrix.rows} colCount={matrix.columns}/>
        </div>
    )
}