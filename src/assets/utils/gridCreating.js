import { GridSquare } from "../../components/gridSquare/GridSquare";
import { GridRow } from "../../components/rows/GridRow";

export const gridCreating = (numberOfRows, numberOfColumns) => {
  const gridRows = [];
  // const randomStart = rand(1, 20);
  // const randomEnd = rand(1, 20);

  for (let i = 0; i < numberOfRows; i++) {

    /////////////////////////
      let row = [];
      for (let j = 0; j < numberOfColumns; j++ ) {
        row.push(<GridSquare key={j}/>); 
      }
      let gridRow = <GridRow children={ row } key={i}/>

    /////////////////////////

      gridRows.push(gridRow);

      // if(gridRow[i] === randomStart){
      //   gridRow[0].classList.add('red');
      // }
    }

    return gridRows;
};