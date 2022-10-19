import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Footer = () => {
    return (
        <Box component="footer"
            sx={{ backgroundColor: 'background.paper', display: "flex", justifyContent: "center", py: 5, px: 2, mt: 'auto' }}>
            <Copyright />
        </Box>
    );
}

export default Footer;

const Copyright = () => {
    return (
        <Typography variant="body2" color="primary">
            {'Copyright © '}
            <Link underline="none" sx={{ color: "primary" }} href="https://www.ticc.nz/" >
                Ticc
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}