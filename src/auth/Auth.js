import React, { Component } from "react";
import jwtService from 'utils/jwtService';
import {setUserData} from 'auth/store/actions/user.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SUCCESS_CODE} from 'const';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waitForLogin: true,
    };
  }

  componentDidMount() {
    return Promise.all([
      this.checkLogin()
    ]).then(() => {
      this.setState({waitForLogin: false})
    })
  }

  checkLogin = () => new Promise(resolve => {
    const token = jwtService.getAccessToken();
    if(token != null) {
      // Đăng nhập với token
      jwtService.siginWithToken(token).then(res => {
        if(res.errorCode === SUCCESS_CODE){
          this.props.setUserData(res.data);
          resolve();
        }
      })
    }
    return Promise.resolve();
  });

  render() {
    return <div>{this.state.waitForLogin ? null : this.props.children}</div>;
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( {
    setUserData: setUserData
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
