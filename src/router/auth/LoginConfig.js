import {authRoutes} from 'auth'
import Login from './Login'

export const LoginConfig = {
  settings: {
    layout: 'Guests'
  },
  auth: authRoutes.onlyGuest,
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
}
