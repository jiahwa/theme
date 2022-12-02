import React from "react";

type Button = {
    onClick: () => unknown
}

export function Button({ onClick }: Button) {
    return (<button onClick={onClick}></button>);
}