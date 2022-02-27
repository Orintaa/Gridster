import { GridSquare } from "../gridSquare/GridSquare";
import { GridRow } from "../rows/GridRow";

export const Grid = ({rowCount, colCount}) => {
  const rows = new Array(rowCount).fill('');
  const columns = new Array(colCount).fill('');

  return (
    <div className="grid-container">
      <div id="grid">test</div>
      {rows.map((number, keyA) => {
        return (
          <GridRow key={keyA}>
            {columns.map((number, keyB) => {
              return <GridSquare key={keyB}></GridSquare>;
            })}
          </GridRow>
        );
      })}


    </div>

  );
};
