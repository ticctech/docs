import React from 'react';

import Button from '../components/Button';

const size: String = '100%'

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    paddingTop: '1rem',
}

export const Home: Element = () => {

    return (
        <div style={divStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <h1>Welcome to ticc's documentation</h1>
                <h4>Here you will find instructions on how the Ticc Amlify app works</h4>
                <div style={divStyle}>
                    <Button style={{ marginRight: 10 }} variant="contained" href={"/architecture"}>Get started</Button>
                    <Button href={"https://github.com/ticctech"}>Open Github</Button>
                </div>
            </div>
        </div >
    );
}

export default Home;