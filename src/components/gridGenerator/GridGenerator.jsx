import React, {useState} from "react";
import "./gridGenerator.css"
import {Button} from "../button/Button";
import {Input} from "../input/Input";

export const GridGenerator = ({matrix, setMatrix}) => {

    const [rows, setRows] = useState(matrix.rows);
    const [columns, setColumns] = useState(matrix.columns);
    const onFormSubmit = (e) => {
        e.preventDefault();
        setMatrix({rows, columns})
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Input label={"Rows"} value={rows} onChange={setRows} name="rows"/>

            <span className="elementBetweenInput">x</span>

            <Input label={"Columns"} value={columns} onChange={setColumns} name="columns"/>

            <Button type="submit">Generate</Button>
        </form>
    );
}
