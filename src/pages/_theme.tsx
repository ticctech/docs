import React from 'react';

import { defaultSideNavs, useThemeCtx } from 'vite-pages-theme-doc';
import { ThemeProvider } from '@mui/material/styles';

import Outline from '../components/Outline';
import Viewport from '../components/Viewport';
import theme from '../theme';;

const Wrapper = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}


const createTheme = () => {
  return ({ loadedData, loadState }) => {
    if (loadState.type !== 'loaded')
      return (
        <Outline visible />
      )
    const pageData = loadedData[loadState.routePath]
    console.log("pageData", pageData)
    const Component = pageData.main.default

    return (
      <Wrapper>
        <Viewport>
          <Component />
        </Viewport>
      </Wrapper>
    )
  }
}

const sideNav = (ctx: any) => {
  console.log(ctx)
  return (defaultSideNavs(
    ctx
  ))
}

const topNavs = [
  { label: 'Architecture', path: '/architecture' },
  { label: 'Dev', path: '/dev' },
  { label: 'UX', path: '/ux' }
]


export default createTheme();

