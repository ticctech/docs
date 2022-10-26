import { createTheme } from 'vite-pages-theme-doc'
import NotFound from '../components/NotFound';
import Logo from '../components/Icons';

const navs: Array<Object> = [
  { label: 'Architecture', path: '/architecture' },
  { label: 'Dev', path: '/dev' },
  { label: 'UX', path: '/ux' },
  { label: 'API', path: '/api' },
]

const components: Object = {
  Component404: NotFound,
  topNavs: navs,
  logo: Logo
}



export default createTheme(components)