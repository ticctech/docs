import React from 'react';

import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'

import NotFound from '../components/NotFound';
import Outline from '../components/Outline';
import Wrapper from '../components/Wrapper';
import Box from '@mui/material/Box';
import Viewport from '../components/Viewport';


const App = ({ loadedData, loadState }: ThemeProps) => {
  const loading = loadState.type;

  if (loading === '404') {
    return <NotFound />
  }
  if (loading !== 'loaded') {
    return <Outline visible />
  }

  const pageData = loadedData[loadState.routePath];
  const Component = pageData.main.default;

  return (
    <Wrapper>
      <Viewport loadState={loadState} >
        <Box sx={{ typography: 'body1' }}>
          <Component />
        </Box>
      </Viewport>
    </Wrapper>
  )
}

export default App;