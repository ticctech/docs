import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

const Wrapper = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
export default Wrapper;