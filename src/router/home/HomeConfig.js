import {authRoutes} from 'auth'
import Home from './Home'

export const HomeConfig = {
  settings: {
    layout: 'Guests',
    showSideBar: true
  },
  auth: authRoutes.onlyGuest,
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
}