import "./gridSquare.css";

export const GridSquare = (props) => {
    let className = "square";
    
    if (props.isStartSquare || props.isEndSquare) {
        className = className + " red";
    }
    return (
        <div className={className}></div>
)
}


// const classes = 'card ' + props.className;
//     return  <div className={classes}>{props.children}</div>