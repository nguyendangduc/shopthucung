import { HomeConfig } from '../home/HomeConfig'
import RoutesUtils from 'utils/RoutesUtils'
import { DetailConfig } from '../detail/DetailConfing'
import {CartConfig} from '../cart/CartConfig'
import {LoginConfig} from '../login/LoginConfig'
import {PurchaseConfig} from '../purchase/PurchaseConfig'
import {CollectionsConfig} from '../collections/CollectionsConfig'
import {ProductSearchConfig} from '../search/ProductSearchConfig'
const routesConfigs = [
    ProductSearchConfig,
    CollectionsConfig,
    PurchaseConfig,
    LoginConfig,
    CartConfig,
    DetailConfig,
    HomeConfig,
]

const routes = RoutesUtils.generateRoutesFromConfig(routesConfigs, null)
console.log(routes)

export default routes;
