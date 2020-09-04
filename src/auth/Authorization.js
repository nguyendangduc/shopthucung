import React, {Component} from 'react';
import AppContext from 'AppContext';
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import {RoutesUtils} from 'utils';

class Authorization extends Component {
  constructor(props, context) {
    super(props);
    const routes = context;
    this.state = {
      accessGranted: true,
      routes
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {location} = props;
    const {pathname} = location;
    const mathed = matchRoutes(state.routes, pathname)[0];
    
    return {
      accessGranted: 
      RoutesUtils.hasPermision(mathed.route.auth, ["RULE_USER12"])
    }
  }

  render() {
    console.log("accessGranted: ", this.state.accessGranted)
    return (
      <React.Fragment>
        <p>Hello Children .!</p>
        {this.props.children}
      </React.Fragment>
    )
  }
}

Authorization.contextType = AppContext;
export default withRouter(Authorization);