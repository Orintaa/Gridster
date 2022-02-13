// import { rowsCreating } from "../../assets/utils/rowsCreating"
import "./rows.css";

export const GridRow = (props) => {
    return (
        <div className="grid-row">
            { props.gridSquares }
        </div>
    )
}
