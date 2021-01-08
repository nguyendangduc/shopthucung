import React from 'react'
import authRoutes from 'auth/authRoutes'
export const CollectionsConfig = {
    settings: {
        layout: "guest"
    },
    auth: authRoutes.onlyGuest,
    routes: [
        {
            path: '/collections/:idCate',
            component: React.lazy( () => import('./Collections'))
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