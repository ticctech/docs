import React from 'react';

import logo from './logo.svg';

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "flex-end"
}
const imgStyle: Object = { width: 50, height: 'auto' }

export const ErrorIcon = () => {
    return (
        <div style={divStyle}>
            <img style={imgStyle} src={logo} alt="logo" />
        </div>
    )
}

export const Logo = () => {
    return (
        <div style={divStyle}>
            <img style={imgStyle} src={logo} alt="" />
            <h3 style={{ marginLeft: 8 }}>Documentation</h3>
        </div>
    )
}
export default Logo;