import logo from "../../assets/images/logo.png";
import "./gridster.css";
import { GridGenerator } from "../gridGenerator/GridGenerator";
import { Grid } from "../grid/Grid";


export const Gridster = () => {
    return (
        <div className="gridster">
            <img id="logo" src={logo} alt={""}></img>
        <GridGenerator/>
        <Grid rowCount={5} colCount={5}/>
        </div>
    )
}