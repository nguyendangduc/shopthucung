import React from 'react'
import authRoutes from 'auth/authRoutes'
export const ProductSearchConfig = {
    settings: {
        layout: "guest"
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/search/keyword/:keyword',
            component: React.lazy( () => import('./ProductSearch'))
        }
    ]
}


