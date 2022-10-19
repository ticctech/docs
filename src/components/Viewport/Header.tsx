import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

import Logo from './Logo';

export const Header = () => {
    return (
        <AppBar position="fixed" component="nav" elevation={1} color="inherit" sx={{ padding: 1, }}>
            <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Link component={RouterLink} to="/" underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main', cursor: 'pointer' }} >
                    <Logo />
                </Link>
                <Box>
                    {topNavs.map((nav, i) =>
                        <Button color={'primary'} component={RouterLink} to={nav.path} key={i}>
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