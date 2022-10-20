import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import { SideBar } from './SideBar';

export const Viewport = ({ children }: any) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
        >
            <Header />
            <Container sx={{ my: 10 }} maxWidth="lg">
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default Viewport;

Viewport.propTypes = {
    children: PropTypes.node.isRequired,
}