import { lazy } from 'react'
import authRoutes from 'auth/authRoutes'
export const CartConfig = {
    settings: {
        layout: 'guest',
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/cart',
            component: lazy(() => import('./Cart'))
        },
        {
            path: '/cartForm',
            component: lazy(() => import('./CartForm'))
        }
    ]
}