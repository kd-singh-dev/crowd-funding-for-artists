import React from "react";
import Input from "@material-tailwind/react/Input";

export default function NewForm() {
    return (
        <div>

        <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={true}
            placeholder="Large Outline Input"
            />
        </div>

    )
}