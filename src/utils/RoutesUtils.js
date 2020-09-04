class RoutesUtils {
  static generaRouteFromConfig(configs, defaultAuth) {
    console.log("configs", configs);
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
