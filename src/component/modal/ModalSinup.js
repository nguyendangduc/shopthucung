import React from 'react';
import {set_modal} from 'store/actions/modalAction';
import {connect} from 'react-redux'
function ModalSignup(props) {
    const register = () => {

    }
    const login = () => { }
    return (
        <>
            <div className="authenticate-form authenticate-form--register">
                        <div className="authenticate-form__container">
                            <div className="authenticate-form__header">
                                <h3 className="authenticate-form__heading">Registration</h3>
                                <span className="authenticate-form__switch-btn" onClick={props.showLogin}>Login</span>
                            </div>
                            <div className="authenticate-form__form">
                                <div className="authenticate-form__group">
                                    <input type="text" className="authenticate-form__input" id="email" placeholder="Your email" />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="password" placeholder="Your password" />
                                    <p className="err" />
                                </div>
                                <div className="authenticate-form__group">
                                    <input type="password" className="authenticate-form__input" id="rePassword" placeholder="Enter the password again" />
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
                                <button className="btn authenticate-form__controls-back" onClick={props.cancel}>COME BACK</button>
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
        </>

    );
}
const mapDispatchToProps = dispatch => ({
    showLogin: () => dispatch(set_modal('ModalLogin')),
    cancel: () => dispatch(set_modal(""))
})
export default connect(null, mapDispatchToProps)(ModalSignup);