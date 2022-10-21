import React from 'react';

import Button from '../components/Button';

const size: String = '100%'

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size
}

export const Home = () => {
    return (
        <div style={divStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <h1>Welcome to ticc's documentation</h1>
                <div style={divStyle}>
                    <Button variant="contained" href={"/architecture"}>Get started</Button>
                    <Button variant="outlined" color={"#156999"} href={"https://github.com/ticctech"}>Open Github</Button>
                </div>
            </div>
        </div >
    );
}

export default Home;