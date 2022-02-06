import React, {useState} from "react";
import {Button} from "../button/Button";
import {Input} from "../input/Input";

export const GridGenerator = () => {
    const [rows, setRows] = useState(10)

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(rows)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Input label={"Rows"} value={rows} onChange={setRows} name="rows"/>

            <Button type="submit">PressMePlease</Button>
        </form>
    );
}
