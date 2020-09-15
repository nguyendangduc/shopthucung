import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import {RoutesUtils} from 'utils';
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

  /*getDerivedStateFromProps nó được gọi khi component được mount lần đầu tiên,
     và trong mỗi lần props hoặc state thay đổi.
     Return ra một state mới sau đó nhảy xuống shouldComponentUpdate
  */
  static getDerivedStateFromProps(props, state) {
    const {location, userData} = props;
    const {pathname} = location;
    const matched = matchRoutes(state.routes, pathname)[0];
    if(matched.route.auth.length === 0 && userData.listUserRules.length > 0 && pathname === '/login') {
      return { accessGranted: !state.accessGranted }
    } else {
      return {
        accessGranted: matched ? RoutesUtils.hasPermision(matched.route.auth, userData.listUserRules) : true
      }
    }
  }

  // Return true render lại component, ngược lại thì không re-render.
  // Sau khi re-render sẽ gọi hàm getSnapshotBeforeUpdate.
  // getSnapshotBeforeUpdate các giá trị return từ hàm này sẽ đưa cho hàm
  // componentDidUpdate(prevProps, prevState, snapshot) thông qua tham số snapshot
  shouldComponentUpdate(nextProps, nextState) {
    // Nếu state accessGranted tiếp theo giống state hiện tại thì không
    // render lại conponent, ngược lại thì render lại.
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  redirectRoute() {
    const {userData, history, location} = this.props;
    console.log("location", location);
    const {pathname, state} = location;
    let redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';
    /*
    User is guest
    Redirect to Login Page
    */
    const {listUserRules} = userData;
    if (!listUserRules || listUserRules.length === 0) {
      history.push({ pathname: "/login", state: { redirectUrl: pathname } });
    } else {
      history.push({pathname: redirectUrl});
    }
  }

  render() {
    console.log('accessGranted is: ' + this.state.accessGranted)
    return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : <AccessDeny/>;
  }
}

Authorization.contextType = AppContext;

function mapStateToProps({auth}) {
  return {
    userData: auth.user
  }
}

export default withRouter(connect(mapStateToProps)(Authorization))
