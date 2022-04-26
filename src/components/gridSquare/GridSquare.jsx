import "./gridSquare.css";

export const GridSquare = (props) => {
    let className = "square";
    
    if (props.isStartSquare) {
        className = className + " start";
    }
    if (props.isEndSquare) {
        className = className + " end";
    }
    return (
        <div className={className}></div>
)
}
