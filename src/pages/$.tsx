import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import README from '../../README.md';

export const Home = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2} sx={{ mt: 8 }}>
            <Typography variant="h2">Welcome to Ticc's documentation app</Typography>
            <Typography color="grayText">Get started with learning all about our practices</Typography>
            <Box sx={{ typography: 'body1' }}>
                <README />
            </Box>
        </Stack>
    );
}

export default Home;

function fetch(README: any) {
    throw new Error('Function not implemented.');
}

