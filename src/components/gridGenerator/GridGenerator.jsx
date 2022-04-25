import React, {useState} from "react";
import {Button} from "../button/Button";
import {Input} from "../input/Input";
import "./gridGenerator.css"

export const GridGenerator = ({matrix, setMatrix}) => {

    const [rowCount, setRowCount] = useState(matrix.rowCount);
    const [columnCount, setColumnCount] = useState(matrix.columnCount);
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        setMatrix({rowCount: Number(rowCount), columnCount: Number(columnCount)});
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Input label={"Rows"} value={rowCount} onChange={setRowCount} name="rows"/>

            <span className="elementBetweenInput">x</span>

            <Input label={"Columns"} value={columnCount} onChange={setColumnCount} name="columns"/>

            <Button type="submit">Generate</Button>
        </form>
    );
}
