import React from 'react'
import authRoutes from 'auth/authRoutes'
import Home from './Home'
export const HomeConfig = {
    settings: {
        layout: "guest"
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/',
            component: React.lazy( () => import('./Home'))
        }
    ]
}











// function About(props) {
//     return (
//         <div>
//             about
//         </div>
//     );
// }
 
// export const HomeConfig = [
 
//     {
//         path: '/about',
//         component: About
//     },
//     {
//         path: '/',
//         component: Home,
//          auth: []
//     }
// ]
// {renderRoutes(routes)}