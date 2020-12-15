import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import RoutesUtils from 'utils/RoutesUtils';
import AccessDeny from 'router/common/AccessDeny';
import { connect } from 'react-redux';

class Authorization extends Component {

  constructor(props, context) {
    super(props);
    const routes = context;
    this.state = {
      accessGranted: true,
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
    const matched = matchRoutes(state.routes, pathname)[0];
    if(pathname === '/login' && userData.listUserRules.length > 0) {
      return { accessGranted: false }
    } 
    return {
      accessGranted: matched ? RoutesUtils.hasPermission(matched.route.auth, userData.listUserRules) : true
    }
}


  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  redirectRoute() {
    const {userData, history, location} = this.props;
    const {pathname, state} = location;
    const {listUserRules} = userData;
    let redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';
    if (!listUserRules || listUserRules.length === 0) {
      history.push({ pathname: "/login", state: { redirectUrl: pathname } });
    } else { 
   
      if(pathname === "/login")
      history.push({pathname: redirectUrl});
    } 
  }
     
  render() {
    return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : <AccessDeny/>;
  }
}

Authorization.contextType = AppContext;

const mapStateToProps = (store) => {
  return {userData: store.userReducer}}

export default withRouter(connect(mapStateToProps)(Authorization))
