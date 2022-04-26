import * as PF from "pathfinding";
import { useState } from "react";
import { GridGenerator } from "../gridGenerator/GridGenerator";
import { Grid } from "../grid/Grid";
import "./gridster.css";
import { rand } from "../../assets/utils/randomNumber";
import logo from "../../assets/images/logo.png";

const DEFAULT_CELL_COUNT = 10;

export const Gridster = (props) => {
  const [matrix, setMatrix] = useState({
    rowCount: DEFAULT_CELL_COUNT,
    columnCount: DEFAULT_CELL_COUNT,
  });

  const startIndex = [0, rand(0, matrix.rowCount - 1)];

  const endIndex = [matrix.columnCount - 1, rand(0, matrix.rowCount - 1)];

  const grid = new PF.Grid(matrix.columnCount, matrix.rowCount);

  const finder = new PF.AStarFinder();

  const path = finder.findPath(
    startIndex[0],
    startIndex[1],
    endIndex[0],
    endIndex[1],
    grid
  );

  console.log(path);
  console.log("start:", startIndex, "end:", endIndex);
  // console.log(matrix.rowCount, matrix.columnCount);
  // console.log('taskai:', )

  return (
    <div className="gridster">
      <img id="logo" src={logo} alt={""}></img>
      <GridGenerator matrix={matrix} setMatrix={setMatrix} />
      <Grid
        rowCount={matrix.rowCount}
        colCount={matrix.columnCount}
        startPoint={startIndex}
        endPoint={endIndex}
      >{console.log('taskai:',startIndex, endIndex)}</Grid>
    </div>
  );
};
