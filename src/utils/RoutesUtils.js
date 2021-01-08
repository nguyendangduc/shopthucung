class RoutesUtils {

  static hasPermission(authArr, userRole) {
    if (!authArr || authArr.length === 0) {
      return true;
    } else { // neu routes co quyền thì phải check quyền user 
      if (userRole) {
        if (userRole === "RULE_ADMIN") {// nếu useRole là 1 string này thì ko quan tâm route có rule ko,ko quan tâm Rule có trùng ko, turn true, gs rule của Route chỉ có mỗi RULE_USER thì nếu k có dòng này thì 2 quyền ko giống nhau à
          return true
        }
        if (authArr.includes(userRole)) {  // return authArr.includes(userRole);// neu userRole là 1 pt(String) chứ ko phải 1 mảng
          return true
        }

        if (Array.isArray(userRole))// if quyền người dùng là array
          return (userRole.includes("RULE_ADMIN")) || userRole.some(r => authArr.includes(r));

        return false

      }// cau chuyen don canh sat , userRole la quan he cua minh vs thang em, authArr la dieu kien giam ho, doc lan luot quan he ra de canh sat duyet mang quyen giam ho 
      // nếu quyền null undefine '' 0 false
      return false
    }

  }
  static isCustomerAccount(userRules) {
    if (userRules) {
      if (userRules === "RULE_USER")
        return true;
      if (Array.isArray(userRules) && userRules.length > 0) {
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