import React from "react";

import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

const style: Object = {
    '&:hover': {
        color: 'background.paper'
    }
}

const NotFound = () => {
    return (
        <Wrapper>
            <Container sx={{ mt: 4 }} maxWidth={'sm'}>
                <Stack sx={{ p: 2 }} alignItems="center" spacing={2} >
                    <ErrorIcon color="error" sx={{ fontSize: 75 }} />
                    <Typography variant="h1">404</Typography>
                    <Typography >{`The page you are looking for does not exist or can't be found`}</Typography>
                    <Button sx={style} variant="contained" component={Link} to={"/"}>Return home</Button>
                </Stack>
            </Container>
        </Wrapper>
    )
}
export default NotFound;