import React, {lazy} from 'react'
import authRoutes from 'auth/authRoutes'
export const DetailConfig = {
    settings: {
        layout: "guest"
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/detail/:id',
            component: React.lazy(() => import("./Detail"))
        }
    ]
}