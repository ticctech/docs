import React from "react";

import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

interface SideBarProps {
    visible: boolean;
    title: string;
}

const drawerWidth = 240;

export const SideBar = ({ visible, title }: SideBarProps) => {
    return (
        <Drawer
            anchor="left"
            variant={visible ? "persistent" : "permanent"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }} >
            <Typography>
                {title}
            </Typography>
        </Drawer>
    )
}