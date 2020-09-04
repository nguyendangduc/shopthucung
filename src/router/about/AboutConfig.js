import {authRoutes} from 'auth'
import About from './About'
import FormAbout from './FormAbout'

export const AboutConfig = {
  settings: {
    layout: 'Guests',
    showSideBar: true
  },
  auth: authRoutes.onlyGuest,
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/form-about',
      component: FormAbout
    },
  ]
}