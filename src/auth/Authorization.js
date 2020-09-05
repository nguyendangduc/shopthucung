import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import {RoutesUtils} from 'utils';
import AccessDeny from 'router/common/AccessDeny';

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
     và trong mỗi lần props thay đổi.
     Return ra một state mới sau đó nhảy xuống shouldComponentUpdate
  */
  static getDerivedStateFromProps(props, state) {
    const {location} = props;
    const {pathname} = location;
    const matched = matchRoutes(state.routes, pathname)[0];
    return {
      accessGranted: matched ? RoutesUtils.hasPermision(matched.route.auth, []) : true
    }
  }

  // Return true render lại component, ngược lại thì không re-render.
  // Sau khi re-render sẽ gọi hàm getSnapshotBeforeUpdate.
  // getSnapshotBeforeUpdate các giá trị return từ hàm này sẽ đưa cho hàm
  // componentDidUpdate(prevProps, prevState, snapshot) thông qua tham số snapshot
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  redirectRoute() {
    const {userRole, history} = this.props;
    let redirectUrl = '/user';
    /*
    User is guest
    Redirect to Login Page
    */
    if (!userRole || userRole.length === 0) {
      history.push({
        pathname: "/login"
      });
    } else {
      history.push({
        pathname: redirectUrl
      });
    }
  }

  render() {
    console.log('accessGranted is: ' + this.state.accessGranted)
    return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : <AccessDeny/>;
  }
}

Authorization.contextType = AppContext;
export default withRouter(Authorization);
