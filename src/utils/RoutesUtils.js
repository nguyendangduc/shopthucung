class RoutesUtils {

  /*
  authRules: Rule của file route config.
  useRules: Rule của người dùng hiện tại.
   */
  static hasPermision(authArr, userRole)
  {
    if(authArr === '*'){
      return true;
    } else if ( authArr === null || authArr === undefined || authArr.length === 0 ) {
      return true;
    } else {
      if ( userRole && Array.isArray(userRole) ) {
        return (userRole.indexOf("RULE_ADMIN") !== -1) || authArr.some(r => userRole.indexOf(r) >= 0);
      }
      return authArr.includes(userRole);
    }
  }

  static generaRouteFromConfig(configs, defaultAuth) {
    let allRouters = [];
    configs.forEach((config) => {
      allRouters = [...allRouters, ...this.setRoute(config, defaultAuth)];
    });
    return allRouters;
  }

  static setRoute(config, defaultAuth) {
    let routes = [...config.routes];
    if (config.settings || config.auth) {
      routes = routes.map((route) => {
        return {
          ...route,
          settings: config.settings,
          auth: config.auth ? [...config.auth] : defaultAuth,
        };
      });
    }
    return [...routes];
  }
}

export default RoutesUtils;
