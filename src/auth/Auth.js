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
    let _this = this;
    jwtService.on("TOKEN", function(token){
      if(token != null) {
        // Đăng nhập với token
        jwtService.siginWithToken(token).then(res => {
          console.log("this", this);
          if(res.errorCode === SUCCESS_CODE){
            _this.props.setUserData(res.data);
            resolve();
          }
        })
      }
    });
    jwtService.init();
    resolve();
  });

  render() {
    console.log("this.state.waitForLogin", this.state.waitForLogin);
    return <div>{this.state.waitForLogin ? null : this.props.children}</div>;
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( {
    setUserData: setUserData
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
