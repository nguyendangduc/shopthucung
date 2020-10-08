import React, { Component } from "react";
import jwtService from 'utils/jwtService';
import {setUserData} from 'auth/store/actions/user.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SUCCESS_CODE} from 'const';

class Auth extends Component {

  state = {
    waitForLogin: true,
  }

  componentDidMount() {
    return Promise.all([
      this.jwtCheck()
    ]).then(() => {
      this.setState({waitForLogin: false})
    })
  }

  jwtCheck = () => new Promise(resolve => {
    jwtService.on("TOKEN", (token) => {
      if(token != null) {
        // Đăng nhập với token
        jwtService.siginWithToken(token).then( async (res) => {
          if(res.errorCode === SUCCESS_CODE){
            await this.props.setUserData(res.data);
            resolve();
          }
        })
      }
    });
    jwtService.init();
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
