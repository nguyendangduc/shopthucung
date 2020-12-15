import React from 'react'
import { HomeConfig } from '../home/HomeConfig'
import RoutesUtils from 'utils/RoutesUtils'
import { DetailConfig } from '../detail/DetailConfing'
import {CartConfig} from '../cart/CartConfig'
import {LoginConfig} from '../login/LoginConfig'
import {PurchaseConfig} from '../purchase/PurchaseConfig'
const routesConfigs = [
    PurchaseConfig,
    LoginConfig,
    CartConfig,
    DetailConfig,
    HomeConfig,
]

const routes = [
    ...RoutesUtils.generateRoutesFromConfig(routesConfigs, null)
]
console.log(routesConfigs,routes)
export default routes;
