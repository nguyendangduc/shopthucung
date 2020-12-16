class RoutesUtils {
    
  static hasPermission(authArr, userRole) {     
    if (!authArr || authArr.length === 0) {
     return true;
   } else { 
     if (userRole) {
       if (userRole === "RULE_ADMIN") {
         return true
       }
       if(authArr.includes(userRole)) {  
         return true
       }
       
       if(Array.isArray(userRole))
         return (userRole.includes("RULE_ADMIN")) || userRole.some(r => authArr.includes(r));
     

     }

     return false
   } 
  
 }
    static isCustomerAccount(userRules) {
        if(userRules) {
            if(userRules === "RULE_USER") 
            return true;
            if(Array.isArray(userRules) && userRules.length > 0 ) {
                return userRules.includes("RULE_USER")
            }
            return false;
        }
        return false;
    }
    static generateRoutesFromConfig(configs, defaultAuth) {
        let allRouters = []
        configs.forEach(config => {
            allRouters = [...allRouters, ...this.setRoute(config, defaultAuth)]
        });
        return allRouters
    }
    static setRoute(config, defaultAuth) {
        let routes = [...config.routes]
            routes = routes.map(route => ({ ...route, settings: config.settings, auth: config.auth ? config.auth : defaultAuth }))
        return routes
    }
}


// muc dich render ra cai duoi
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
export default RoutesUtils