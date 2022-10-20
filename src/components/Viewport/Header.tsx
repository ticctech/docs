import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export const Header = ({ drawerWidth }: any) => {
    return (
        <AppBar sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }} position="fixed" component="nav" elevation={1} color="inherit">
            <Toolbar >
                <Box
                    component="nav"
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        mx: 2,
                    }}
                >
                    {topNavs.map((nav, i) =>
                        <Button component={RouterLink} to={nav.path} key={i}>
                            {nav.label}
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;


const topNavs = [
    { label: 'Architecture', path: '/architecture' },
    { label: 'Dev', path: '/dev' },
    { label: 'UX', path: '/ux' }
]