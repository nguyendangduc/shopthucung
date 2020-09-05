class RoutesUtils {

  /*
  authRules: Rule của file route config.
  useRules: Rule của người dùng hiện tại.
   */
  static hasPermision(authRules, useRules) {
    if(authRules === null || authRules.length === 0 || authRules === undefined) {
      return true;
    } else {
      if ( useRules && Array.isArray(useRules) ) {
        return (useRules.indexOf("ROLE_ADMIN") !== -1) || authRules.some(r => useRules.indexOf(r) >= 0);
      }
      return authRules.includes(useRules);
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
