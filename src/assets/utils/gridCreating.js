import { GridSquare } from "../../components/gridSquare/GridSquare";
import { GridRow } from "../../components/rows/GridRow";

export const gridCreating = (numberOfRows, numberOfColumns) => {
  const gridRows = [];

  for (let i = 0; i < numberOfRows; i++) {

    /////////////////////////
      let row = [];
      for (let j = 0; j < numberOfColumns; j++ ) {
        row.push(<GridSquare key={j}/>); 
      }
      let gridRow = <GridRow children={ row } key={i}/>

    /////////////////////////

      gridRows.push(gridRow);
    }

    return gridRows;
};