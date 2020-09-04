import React from 'react'
import { AboutConfig } from 'router/about/AboutConfig'
import { ContactConfig } from 'router/contact/ContactConfig'
import { HomeConfig } from 'router/home/HomeConfig'
import { RoutesUtils } from 'utils';
import { Redirect } from 'react-router-dom';

const routesConfig = [
  AboutConfig,
  ContactConfig,
  HomeConfig
]

const routes = [
  ...RoutesUtils.generaRouteFromConfig(routesConfig, null),
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    component: () => <Redirect to="/error-404" />
  }
]

export default routes;