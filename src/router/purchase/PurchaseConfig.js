import React from 'react';
export const PurchaseConfig = {
    settings: {
        layout: 'guest'
    },
    auth: ['RULE_USER'],
    routes: [
        {
            path: '/purchase',
            component: React.lazy( () => import('./Purchase'))
        }
    ]
}