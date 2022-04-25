import './rows.css';

export const GridRow = ({children, isStartSquare}) => {
    return (
        <div className="grid-row">
            { children }
        </div>
    )
}
