import React from 'react';
import { set_modal } from 'store/actions/modalAction';
import { connect } from 'react-redux'
function ModalLogin(props) {
    const register = () => {

    }
    const login = () => { }
    return (
        <>
                  <div className="authenticate-form authenticate-form--login">
                        <div className="authenticate-form__container">
                            <div className="authenticate-form__header">
                                <h3 className="authenticate-form__heading">Login</h3>
                                <span className="authenticate-form__switch-btn" onClick={props.showSignup}>register</span>
                            </div>
                            <div className="authenticate-form__form">
                                <div className="authenticate-form__group">
                                    <input type="email" className="authenticate-form__input" id="email" placeholder="Your email" />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="pass" placeholder="Your password" />
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
                                <button className="btn btn--normal authenticate-form__controls-back" onClick={props.cancel}>COME BACK</button>
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
        </>

    );
}
const mapDispatchToProps = dispatch => ({
    showSignup: () => dispatch(set_modal('ModalSignup')),
    cancel: () => dispatch(set_modal(""))
})
export default connect(null, mapDispatchToProps)(ModalLogin);