import { GridSquare } from "../gridSquare/GridSquare";
import { GridRow } from "../rows/GridRow";

export const Grid = ({ rowCount, colCount }) => {
  const rows = new Array(rowCount).fill("");
  const columns = new Array(colCount).fill("");

  const startIndex = rand(0, rowCount - 1);
  const endIndex = rand(0, rowCount - 1);
  // console.log('start', startIndex, 'end', endIndex);

  let isStartSquare = false;
  let isEndSquare = false;

  return (
    <div className="grid-container">
      {rows.map((number, keyA) => {
        return (
          <GridRow key={keyA}>
            {columns.map((number, keyB) => {

              isStartSquare = false;
              if (keyA === startIndex) {
                if (keyB === 0) {
                  isStartSquare = true;
                }
              }

                isEndSquare = false;
                if (keyA === endIndex) {
                  console.log("foundid");
                  if (keyB === colCount - 1) {
                    isEndSquare = true;
                  }
                }

              
              return (
                <GridSquare
                  key={keyB}
                  isStartSquare={isStartSquare}
                  isEndSquare={isEndSquare}
                ></GridSquare>
              );
            })}
          </GridRow>
        );
      })}
    </div>
  );
};

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
