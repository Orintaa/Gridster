import { gridCreating } from "../../assets/utils/gridCreating";

export const Grid = () => {
    const squares = gridCreating(10, 10);
    console.log(squares);
    return (
        <div className="grid-container">
            <div id="grid">test</div>
            { squares }       
        </div>
    )
}