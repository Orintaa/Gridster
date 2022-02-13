import { Rows } from "../../components/rows/GridRow";


export const colsCreating = (rows) => {
    const gridRow = [];
  
    for (let i = 0; i < rows; i++) {
        gridRow.push(Rows);
      }
  
      return gridRow;
  };