import { GridSquare } from "../../components/gridSquare/GridSquare";

export const rowsCreating = (columns) => {
  let gridCol = [];

  for (let j = 0; j < columns; j++) {
    gridCol.push(<GridSquare />);
  }

  return gridCol;
};
