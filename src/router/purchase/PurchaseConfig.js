import React from 'react';
import authRoutes from 'auth/authRoutes'
export const PurchaseConfig = {
    settings: {
        layout: 'guest'
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/purchase',
            component: React.lazy( () => import('./Purchase'))
        }
    ]
}