import React, { useMemo, useEffect } from 'react';

import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'
import { useStaticData } from 'vite-plugin-react-pages/client'

import NotFound from '../components/NotFound';
import Outline from '../components/Outline';
import Wrapper from '../components/Wrapper';
import Box from '@mui/material/Box';
import { SideBar } from '../components/Viewport/SideBar';


const App = ({ loadedData, loadState }: ThemeProps) => {
  const loading = loadState.type;
  const staticData = useStaticData()

  if (loading === '404') {
    return (
      <Wrapper>
        <NotFound />
      </Wrapper>
    )
  }
  if (loading !== 'loaded') {
    return (
      <Wrapper>
        <Outline visible />
      </Wrapper>
    )
  }

  const pageData = loadedData[loadState.routePath];
  const Component = pageData.main.default;

  // console.log(pageData.main)
  const data = staticData[loadState.routePath].main

  console.log(staticData)
  console.log('')
  const title = data.title
  const hide = data.sourceType === 'js'


  return (
    <Wrapper >
      <SideBar visible={hide} title={title} />
      <Box sx={{ typography: 'body1' }}>
        <Component />
      </Box>
    </Wrapper >
  )
}
export default App;

