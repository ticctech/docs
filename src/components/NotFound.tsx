import React from "react";

import Button from './Button';
import { ErrorIcon } from './Icons';

const size: String = '100%'

const divStyle: Object = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size
}

const NotFound = () => {
    return (
        <div style={divStyle}>
            <ErrorIcon />
            <h1>404</h1>
            <h2>Error Page not found</h2>
            <Button variant="contained" href="/">
                Return Home
            </Button>
        </div>
    )
}
export default NotFound;