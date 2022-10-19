import React from 'react';

import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';

export const Outline = ({ visible }: any) => {
    if (!visible) {
        return <></>;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
            <Skeleton height="5rem" />
            <Skeleton variant="rectangular" height="20rem" />
            <Skeleton height="5rem" />
        </Container>
    );
};

export const ListSkeleton = () => {
    return (
        <Skeleton variant='text' width="100%" height={52} />
    )
}

export default Outline;
