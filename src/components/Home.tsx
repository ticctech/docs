import React from 'react';

import Button from './Button';

const size: String = '100%'

const divStyle: Object = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    paddingTop: '1rem',
}

export const Home = () => {

    return (
        <div style={divStyle}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h1>Amlify Developer Documentation</h1>
                <h2>Code Repository</h2>
                <Button href={"https://github.com/ticctech"}>github.com/ticctech</Button>
                <h2>Contents</h2>
                <ul>
                    <li>
                        <a href="/architecture"><h4>Architecture</h4></a>
                        <p>A high-level overview of system architecture, key architectural decisions and principals
                            to govern the structure of the solution.</p>
                    </li>
                    <li>
                        <a href="/dev"><h4>Development</h4></a>
                        <p>How to get started and contribute as a developer.</p>
                    </li>
                    <li>
                        <a href="/ux"><h4>User Experience (UX)</h4></a>
                        <p>Notes on principles for user interface development.</p>
                    </li>
                    <li>
                        <a href="/api"><h4>API</h4></a>
                        <p>Service endpoint documentation</p>
                    </li>
                </ul>
                <div style={divStyle}>
                    {/* <Button style={{ marginRight: 10 }} variant="contained" href={"/architecture"}>Get started</Button>
                    <Button href={"https://github.com/ticctech"}>Open Github</Button> */}
                </div>
            </div>
        </div >
    );
}

export default Home;