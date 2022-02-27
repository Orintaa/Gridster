import { GridSquare } from "../../components/gridSquare/GridSquare";
import { GridRow } from "../../components/rows/GridRow";

export const gridCreating = (rows, columns) => {
  const gridRows = [];

  for (let i = 0; i < rows; i++) {

    /////////////////////////
      let row = [];
      for (let j = 0; j < columns; j++ ) {
        row.push(<GridSquare key={j}/>); 
      }
      let gridRow = <GridRow children={ row } key={i}/>

    /////////////////////////

      gridRows.push(gridRow);
    }

    return gridRows;
};
