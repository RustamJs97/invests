import User from '../components/User'
import UserInfo from '../components/UserInfo'
import Home from '../page/Home'

export const navbarUtils = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    element: <Home />
  },
  {
    id: 2,
    title: 'Texnology',
    path: '/texnology',
    element: <User />
  },
  {
    id: 3,
    title: 'Portfolio',
    path: '/portfolio',
    element: <User />
  },
  {
    id: 4,
    title: 'UserInfo',
    path: '/UserInfo',
    element: <UserInfo />
  },
  {
    id: 5,
    title: 'About',
    path: '/about',
    element: <User />
  },
]