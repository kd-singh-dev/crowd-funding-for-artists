import React from "react";
import Progress from "@material-tailwind/react/Progress";

export default function Progress(props) {
    return (
        <Progress color="green" value={props.value} percentage={false} />
    );
}