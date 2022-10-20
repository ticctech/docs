import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({ drawerWidth }: any) => {
    const [open, setOpen] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(open);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(e.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };


    return (
        <AppBar sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }} position="fixed" component="nav" elevation={1} color="inherit">
            <Toolbar >
                <Box
                    component="nav"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        mx: 2
                    }}
                >
                    {topNavs.map((nav, i) =>
                        <Button component={RouterLink} to={nav.path} key={i}>
                            {nav.label}
                        </Button>
                    )}
                </Box>
                <Box sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                    mx: 2
                }}>
                    <IconButton onClick={handleOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={open}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={isMenuOpen}
                        onClose={handleClose}>
                        {topNavs.map((nav, i) =>
                            <MenuItem component={RouterLink} to={nav.path} key={i}>{nav.label}</MenuItem>
                        )}
                    </Menu>
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