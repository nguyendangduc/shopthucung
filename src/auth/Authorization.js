import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import RoutesUtils from 'utils/RoutesUtils';
import AccessDeny from 'router/common/AccessDeny';
import { connect } from 'react-redux';

class Authorization extends Component {

  constructor(props, context) {// lau context trong classComponent
    super(props);
    const routes = context;
    this.state = {
      accessGranted: false,// t
      routes
    }
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {location, userData} = props;
    console.log(props)
    const {pathname} = location;
    const config = matchRoutes(state.routes, pathname)[0];

    if(pathname === '/login' && userData.listUserRules.length > 0) {// nếu ở trang login và đã đăng nhập thành công(tức là đã có listQuyền nhưng ko có nghĩa là đã được vào router) 
      return { accessGranted: false }
    } 
    return {
      accessGranted: config ? RoutesUtils.hasPermission(config.route.auth, userData.listUserRules) : false// cach viet chong loi undefine
    }
}

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    console.log(this.context);
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

 
  redirectRoute() {
    const {userData, history, location} = this.props;
    const {pathname, state} = location;
    const {listUserRules} = userData;
    let redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';
    if (!listUserRules || listUserRules.length === 0) {// listUserRule mac dinh lay tu store la []
      history.push({ pathname: "/login", state: { redirectUrl: pathname } });
    } else { 
    
      if(pathname === "/login")// từ trang login lây gt từ state ở location đúng ở trang này
      history.push({pathname: redirectUrl});
    } 
  }

  render() {
    return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : <AccessDeny/>;

  }
}

Authorization.contextType = AppContext

const mapStateToProps = (store) => {

  return {userData: store.userReducer}}



export default withRouter(connect(mapStateToProps)(Authorization))
