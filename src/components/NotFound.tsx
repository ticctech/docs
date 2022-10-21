import React from "react";

import Button from '../components/Button';

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
            <h1>404</h1>
            <h2>Page not found</h2>
            <Button variant="contained" color="#156999" href="/">
                Return Home
            </Button>
        </div>
    )
}
export default NotFound;