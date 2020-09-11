import React, { useState } from 'react';
import { submitLogin } from 'auth/store/actions/login.action';
import { useDispatch } from 'react-redux';

const Login = props => {

  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: ''
  });

  const onChangeInput = (event) => {
    const {name, value} = event.target;
    setDataLogin({
      ...dataLogin,
      [name]: value
    })
  }

  const onSubmit = () => {
    dispatch(submitLogin(dataLogin));
  }

  return <>
    <div style={{'width': '400px','margin': '0 auto','marginTop': '30px'}} className="login-part2389">
      <h4>Login</h4>
      <div className="input-group300">
          <span><i className="fa fa-user" aria-hidden="true" /></span>
          <input name="username" onChange={onChangeInput} type="text" className="namein309" placeholder="Tên đăng nhập" />
      </div>
      <div className="input-group300">
          <span><i className="fa fa-lock" aria-hidden="true" /></span>
          <input name="password" onChange={onChangeInput} type="password" className="passin309" placeholder="Mật khẩu" />
      </div>
      <button onClick={onSubmit} type="button" className="userlogin320">Log In</button>
    </div>
  </>
}

export default Login;
