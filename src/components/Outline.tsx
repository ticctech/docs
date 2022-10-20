import React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export const Outline = ({ visible }: any) => {
    if (!visible) {
        return <></>;
    }

    return (
        <Container>
            <Stack spacing={2} sx={{ py: 4, mt: 10 }}>
                <Skeleton variant="rounded" height="5rem" />
                <Skeleton variant="rectangular" height="20rem" />
                <Skeleton variant="rounded" height="5rem" />
            </Stack>
        </Container>

    );
};

export default Outline;
