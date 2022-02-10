import React, {useState} from "react";
import "./gridGenerator.css"
import {Button} from "../button/Button";
import {Input} from "../input/Input";

const DEFAULT_CELL_COUNT = 10;

export const GridGenerator = () => {
   
    const [rows, setRows] = useState(DEFAULT_CELL_COUNT);
    const [columns, setColumns] = useState(DEFAULT_CELL_COUNT);
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(rows);
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
