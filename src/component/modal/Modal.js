import React from 'react';

function Modal(props) {
  const register = () => {

  }
  const login = () => {}
  return (
    <>
      <div className="modal">
        <div className="modal__overlay" />
        {/* mac dinh 2 the co position ma khong co z index thi the nao dung sau the do o vi tri cao hon */}
        <div className="modal__body" data-auth>
          {/* register form  */}
          <div className="authenticate-form authenticate-form--register">
            <div className="authenticate-form__container">
              <div className="authenticate-form__header">
                <h3 className="authenticate-form__heading">Registration</h3>
                <span className="authenticate-form__switch-btn">Login</span>
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
                <button className="btn authenticate-form__controls-back">COME BACK</button>
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
                <button className="btn btn--normal authenticate-form__controls-back">COME BACK</button>
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
    </>

  );
}

export default Modal;