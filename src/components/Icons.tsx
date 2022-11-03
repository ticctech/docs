import React from 'react';

import logo from './logo.svg';
import error from './error.svg';

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "flex-end"
}

const logoStyle: Object = { width: 50, height: 'auto' }
const errStyle: Object = { width: 100, height: 'auto' }

export const ErrorIcon: Function = () => {
    return (
        <div style={divStyle}>
            <img style={errStyle} src={error} alt="logo" />
        </div>
    )
}

export const Logo: Element = () => {
    return (
        <div style={divStyle}>
            <img style={logoStyle} src={logo} alt="" />
            <h3 style={{ marginLeft: 8 }}>Amlify Documentation</h3>
        </div>
    )
}
export default Logo;