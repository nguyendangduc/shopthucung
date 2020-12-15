import React from 'react'
import authRoutes from 'auth/authRoutes'
export const LoginConfig = {
    settings: {
        layout: "guest"
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/login',
            component: React.lazy( () => import('./Login'))
        }
    ]
}

