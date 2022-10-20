import React from 'react';

import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'

import NotFound from '../components/NotFound';
import Outline from '../components/Outline';
import Wrapper from '../components/Wrapper';
import Viewport from '../components/Viewport';

const App = (props: ThemeProps) => {
  const { loadedData, loadState } = props;
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
        <Component />
      </Viewport>
    </Wrapper>
  )
}

export default App;