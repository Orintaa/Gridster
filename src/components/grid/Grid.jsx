import { GridSquare } from "../gridSquare/GridSquare";
import { GridRow } from "../rows/GridRow";

export const Grid = ({ rowCount, colCount, startPoint, endPoint }) => {
  const rows = new Array(rowCount).fill("");
  const columns = new Array(colCount).fill("");
  console.log("cia:", startPoint, endPoint);
  return (
    <div className="grid-container">
      {rows.map((number, keyA) => {
        return (
          <GridRow key={keyA}>
            {columns.map((number, keyB) => {
              return (
                <GridSquare
                  key={`${keyA}+${keyB}`}
                  x={keyB}
                  y={keyA}
                  isStartSquare={
                    keyB === startPoint[0] && keyA === startPoint[1]
                  }
                  isEndSquare={keyB === endPoint[0] && keyA === endPoint[1]}
                >
                </GridSquare>
              );
            })}
          </GridRow>
        );
      })}
    </div>
  );
};
