import React, { Suspense } from 'react';

import { createTheme } from 'vite-pages-theme-doc'

import NotFound from '../components/NotFound';
import Logo from '../components/Icons';

const App = ({ children }) => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      {children}
    </Suspense>
  )
}

const navs = [
  { label: 'Architecture', path: '/architecture' },
  { label: 'Dev', path: '/dev' },
  { label: 'UX', path: '/ux' }
]

const components = {
  Component404: NotFound,
  topNavs: navs,
  logo: Logo,
  AppWrapper: App
}

export default createTheme(components)