import Search from './Search'
import {authRoutes} from 'auth'

export const SearchConfig = {
  settings: {
    layout: 'Admin',
    showSideBar: true
  },
  auth: authRoutes.user,
  routes: [
    {
      path: '/search',
      component: Search
    }
  ]
}
