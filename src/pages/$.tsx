import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export const Home = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2} sx={{ mt: 8 }}>
            <Typography variant="h2">Welcome to Ticc's documentation app</Typography>
            <Typography color="grayText">Get started with learning all about our practices</Typography>
        </Stack>
    );
}

export default Home;