import React from 'react';

import Stack from '@mui/material/Stack';
import { createTheme, defaultSideNavs, } from 'vite-pages-theme-doc';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import NotFound from './NotFound';
import Logo from './Logo';
import theme from '../theme';
import { Typography } from '@mui/material';

const style = {
  '&:hover': {
    color: 'primary.dark'
  }
}

const Header = () => {
  return (
    <Stack
      spacing={1}
      sx={style}
      justifyContent="center"
      alignItems="center" direction="row">
      <Logo />
      <Typography>Documentation</Typography>
    </Stack>
  )
}

const Wrapper = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const MenuBar = () => {
  return (
    <>
      {topNavs.map((nav, i) =>
        <Button sx={style} color={'primary'} component={Link} to={nav.path} key={i}>
          {nav.label}
        </Button>
      )}
    </>
  )
}

const sideNav = (ctx: any) => {
  console.log(ctx)
  return (defaultSideNavs(
    ctx
  ))
}

export default createTheme({
  logo: Header,
  AppWrapper: Wrapper,
  sideNavs: sideNav,
  TopBarExtra: MenuBar,
  Component404: NotFound
})

const topNavs = [
  { label: 'Architecture', path: '/architecture' },
  { label: 'Dev', path: '/dev' },
  { label: 'UX', path: '/ux' }
]
