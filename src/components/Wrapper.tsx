import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Viewport from "./Viewport";


const Wrapper = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Viewport>
                {children}
            </Viewport>
        </ThemeProvider>
    )
}
export default Wrapper;