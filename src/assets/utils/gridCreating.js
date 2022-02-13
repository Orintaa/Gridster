import { GridSquare } from "../../components/gridSquare/GridSquare";
import { GridRow } from "../../components/rows/GridRow";
// import { GridGenerator } from "../gridGenerator/GridGenerator";

export const gridCreating = (rows, columns) => {
  const gridRows = [];

  for (let i = 0; i < rows; i++) {

    /////////////////////////
      let row = [];
      for (let j = 0; j < columns; j++ ) {
        row.push(<GridSquare/>); 
      }
      let gridRow = <GridRow gridSquares={ row } />

    /////////////////////////

      gridRows.push(gridRow);
    }

    return gridRows;
};
