import Contact from './Contact'
import {authRoutes} from 'auth'

export const ContactConfig = {
  settings: {
    layout: 'Admin',
    showSideBar: true
  },
  auth: authRoutes.user,
  routes: [
    {
      path: '/contact-us',
      component: Contact
    }
  ]
}