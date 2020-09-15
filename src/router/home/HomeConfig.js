import React from 'react';
import {authRoutes} from 'auth'

export const HomeConfig = {
  settings: {
    layout: 'Guests',
    showSideBar: true
  },
  auth: authRoutes.onlyGuest,
  routes: [
    {
      path: '/',
      component: React.lazy( () => import('./Home'))
    }
  ]
}