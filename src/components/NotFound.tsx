import React from "react";

import Button from '../components/Button';

const size: String = '100%'

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size
}


const NotFound = () => {
    return (
        <div style={divStyle}>
            <div>
                <h1>404</h1>
                <h2>Page not found</h2>
                <Button variant="outlined" color="#156999" href="/">
                    Return Home
                </Button>
            </div>
        </div>
    )
}
export default NotFound;

