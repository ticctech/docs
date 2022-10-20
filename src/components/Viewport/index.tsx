import React, { useState } from "react";

import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";

import Header from "./Header";
import Footer from "./Footer";
import Logo from './Logo';

import { useStaticData } from 'vite-plugin-react-pages/client'

const drawerWidth: Object = 250;

interface Props {
    loadState: any
    children: React.ReactNode
}

const Main = styled(Box)(
    ({ theme }: any) => ({
        marginTop: theme.spacing(8),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`
    }),
);

export const Viewport = (props: Props) => {
    const { loadState, children } = props;
    const staticData = useStaticData()
    const body = Object.entries(staticData)
    const filter = [loadState.routePath].toString().split("/")[1]

    return (
        <>
            <Header drawerWidth={drawerWidth} />
            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }} >
                <Toolbar >
                    <Link component={RouterLink} to="/" underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main', cursor: 'pointer' }} >
                        <Logo />
                    </Link>
                    <Typography sx={{ flexGrow: { xs: 1, sm: 0 } }}> Documentation</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {body.map((item, i) => item[0].includes(`${filter}`) &&
                        <ListItem key={i} disablePadding>
                            <ListItemButton component={RouterLink} to={item[0]}>
                                <ListItemText primary={item[1].main.title} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
                <Divider />
            </Drawer>
            <Container>
                <Main sx={{
                    typography: 'body1',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}>
                    {children}
                </Main>
            </Container>
            <Footer />
        </>
    )
}

export default Viewport; 