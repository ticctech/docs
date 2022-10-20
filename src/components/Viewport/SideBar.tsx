import React from "react";

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from "@mui/material/Drawer";
import { Link as RouterLink } from 'react-router-dom';

import { useStaticData } from 'vite-plugin-react-pages/client'

interface SideBarProps {
    loadState: any
}

const drawerWidth = 240;

export const SideBar = ({ loadState }: SideBarProps) => {
    const staticData = useStaticData()
    const body = Object.entries(staticData)
    const filter = [loadState.routePath].toString()
    const data = staticData[loadState.routePath].main
    const hide = data.sourceType === 'js'

    console.log(filter)


    return (
        <Drawer
            anchor="left"
            variant={hide ? "persistent" : "permanent"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }} >

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
    )
}