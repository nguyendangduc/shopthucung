import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import {connect} from 'react-redux';
import {login_request,signup_request} from 'store/actions/authAction';
import {useHistory} from 'react-router-dom'
import './dom.js'
function Login(props) {
    const history = useHistory()
    console.log(history);

    const [dataLogin, setDataLogin] = useState({
        username: '',
        password: ''
    })
    const [dataSignup, setDataSignup] = useState({
        username: '',
        password: '',
        repass: ''
    })
    const login = () => {
        props.handleLogin(dataLogin)
    }
    const register = () => {
        props.handleSignup(dataSignup)
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDataLogin({ 
            ...dataLogin,
            [name]: value,
        })
    }
    const signupHandleChange = (event) => {
        setDataSignup({
            ...dataSignup,
            [event.target.name]: event.target.value,
        })
    }
    const modalStyle = {
        width: '100vw',
        height: "100vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://www.medilona.com.br/wp-content/uploads/2018/03/banner-pet-02.jpg)',
        display: 'flex'
    }
    return (
        <>
            <div className="modal" style={{display: 'flex'}}>
                <div className="modal__overlay" style={modalStyle} />
                {/* mac dinh 2 the co position ma khong co z index thi the nao dung sau the do o vi tri cao hon */}
                <div className="modal__body" data-auth>
                    {/* register form  */}
                    <div style={{ display: 'none' }} className="authenticate-form authenticate-form--register">
                        <div className="authenticate-form__container">
                            <div className="authenticate-form__header">
                                <h3 className="authenticate-form__heading">Registration</h3>
                                <span className="authenticate-form__switch-btn">Login</span>
                            </div>
                            <div className="authenticate-form__form">
                                <div className="authenticate-form__group">
                                    <input type="text" className="authenticate-form__input" id="email" name="username" placeholder="Your email" onChange={signupHandleChange} value={dataSignup.username} />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="password" placeholder="Your password" name="password" onChange={signupHandleChange} value={dataSignup.password} />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="rePassword" placeholder="Enter the password again" name="repass" onChange={signupHandleChange} value={dataSignup.repass} />
                                    <p className="err" />
                                </div>
                            </div>
                            <div className="authenticate-form__aside">
                                <p className="authenticate-form__policy">
                                    <span className="authenticate-form__policy-text">Bằng việc đăng kí bạn đã đồng ý với shoppe về</span>
                                    <a href="#" className="authenticate-form__text-link">
                                        regulations of sevice
                </a>&amp;
                <a href="#" className="authenticate-form__text-link">privacy policy</a>
                                </p>
                            </div>
                            <div className="authenticate-form__controls">
                                <button className="btn btn--primary" onClick={register}>REGISTRATION</button>
                            </div>
                        </div>
                        <div className="authenticate-form__socials">
                            <a href="#" className="authenticate-form__socials-facesbook btn btn--size-s btn--width-icon">
                                <i className="authenticate-form__socials-icon fab fa-facebook-square" />
                                <span className="authenticate-form__socials-title">
                                    Connect with facesbook
              </span>
                            </a>
                            <a href="#" className="authenticate-form__socials-google btn btn--size-s btn--width-icon">
                                <i className="authenticate-form__socials-icon fab fa-google" />
                                <span className="authenticate-form__socials-title">
                                    Connect with google
              </span>
                            </a>
                        </div>
                    </div>
                    {/* login form  */}
                    <div className="authenticate-form authenticate-form--login">
                        <div className="authenticate-form__container">
                            <div className="authenticate-form__header">
                                <h3 className="authenticate-form__heading">Login</h3>
                                <span className="authenticate-form__switch-btn">register</span>
                            </div>
                            <div className="authenticate-form__form">
                                <div className="authenticate-form__group">
                                    <input type="email" className="authenticate-form__input" id="email" placeholder="Your email" name="username" value={dataLogin.username} onChange={handleChange} />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="pass" placeholder="Your password" name="password" value={dataLogin.password} onChange={handleChange} />
                                    <p className="err" />
                                </div>
                            </div>
                            <div className="authenticate-form__aside">
                                <div className="authenticate-form__help">
                                    <span className="authenticate-form__help-forgot">Forgot password</span>
                                    <span className="authenticate-form__help-separate" />
                                    <a href="#" className="authenticate-form__help-link">Do you need help?</a>
                                </div>
                            </div>
                            <div className="authenticate-form__controls">
                                <button className="btn btn--primary" onClick={login}>Log In</button>
                            </div>
                        </div>
                        <div className="authenticate-form__socials authenticate-form__socials--register">
                            <a href="#" className="authenticate-form__socials-sms btn  btn--width-icon">
                                <i className="authenticate-form__socials-icon fas fa-comment-dots" />
                                <span className="authenticate-form__socials-title">
                                    SMS
                 </span>
                            </a>
                            <a href="#" className="authenticate-form__socials-facesbook btn  btn--width-icon">
                                <i className="authenticate-form__socials-icon fab fa-facebook-square" />
                                <span className="authenticate-form__socials-title ">
                                    Facesbook
              </span>
                            </a>
                            <a href="#" className="authenticate-form__socials-google btn  btn--width-icon">
                                <i className="authenticate-form__socials-icon fab fa-google" />
                                <span className="authenticate-form__socials-title">
                                    Google
              </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
const mapDispatchToProps  = (dispatch) => ({
    handleLogin: (dataLogin) => dispatch(login_request(dataLogin)),
    handleSignup: (dataSignup) => dispatch(signup_request(dataSignup))
})
export default connect(null, mapDispatchToProps)(Login);