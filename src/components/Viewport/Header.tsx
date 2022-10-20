import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import Logo from './Logo';

export const Header = () => {
    return (
        <AppBar position="fixed" component="nav" elevation={1} color="inherit" sx={{ padding: 1, }}>
            <Toolbar >
                <Link component={RouterLink} to="/" underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main', cursor: 'pointer' }} >
                    <Logo />
                </Link>
                <Typography sx={{ flexGrow: { xs: 1, sm: 0 } }}>AMLIFY Documentation</Typography>
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