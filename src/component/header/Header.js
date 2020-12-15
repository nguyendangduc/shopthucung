import React, { useEffect, useState } from 'react';
import Modal from "component/modal/Modal";
import {useDispatch} from 'react-redux'
import {logout} from 'store/actions/authAction';
function Header(props) {
  const dispatch = useDispatch()
  useEffect(() => {

  }, [])

  const checkEmail = (email) => {
    // const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    // if (!filter.test(email)) {
    //   email.focus
    //   return false

    // }
  }

  const login = () => {
    const email = document.querySelector(".authenticate-form--login .authenticate-form__input#email")
    const pass = document.querySelector(".authenticate-form--login .authenticate-form__input#pass")
    let check = true
    if (email.value === "" || email.value.trim() === "") {
      email.parentNode.querySelector(".err").innerHTML = "Không được để trống ở trường này!"
      check = false
    } else {
      if (checkEmail(email.value) === false) {
        email.parentNode.querySelector(".err").innerHTML = "Email sai định dạng!"
        check = false
      } else {
        email.parentNode.querySelector(".err").innerHTML = ""
      }
    }

    if (pass.value === "" || pass.value.trim() == "") {
      pass.parentNode.querySelector(".err").innerHTML = "Không được để trống ở trường này!"
      check = false
    } else {
      pass.parentNode.querySelector(".err").innerHTML = ""
    }

    if (check) {
      if (email.value === "admin@gmail.com" && pass.value === "admin") {// gửi axios cho servere xong xl search trong database trả về rồi setgt
        window.location.href = "index.html"
      }
    }
  }
  const register = () => {
    const email = document.querySelector(".authenticate-form__input#email")
    const pass = document.querySelector(".authenticate-form__input#password")
    const repass = document.querySelector(".authenticate-form__input#rePassword")
    let check = true
    // email 
    if (email.value === '' || email.value.trim() === "") {
      email.parentNode.querySelector('.err').innerText = "Vui lòng điền vào trường này!"
      check = false
    } else {
      if (checkEmail(email.value) == false) {
        email.parentNode.querySelector('.err').innerText = "Email sai định dạng!"
      } else {
        email.parentNode.querySelector(".err").innerText = ""
      }
    }
    // pass
    if (pass.value === "" || pass.value.trim() === "") {
      pass.parentNode.querySelector(".err").innerText = "Vui lòng nhập mật khẩu!"
      check = false
    } else {
      pass.parentNode.querySelector(".err").innerText = ""
      if (repass.value === "" || repass.value.trim() === "") {
        repass.parentNode.querySelector(".err").innerText = "Vui lòng nhập lại mật khẩu!"
        check = false
      } else {
        if (repass.value !== pass.value) {
          repass.parentNode.querySelector(".err").innerText = "Mật khẩu nhập lại không trùng khớp!"
          check = false
        } else {
          repass.parentNode.querySelector(".err").innerText = ""
        }
      }
    }
    if (check === true) {// thực hiện post lên register ,xử lý thêm vào sql rồi trả đối tượng về client rổi set

    }

  }
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <>
    <header className="header">
      <div className="grid wide">
        <nav className="header__navbar hide-on-mobile-tablet">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--separate">Vao cua hang tren f8
              <div className="header__qr">
                <div className="header__qr-content">
                  <img src="assets/img/sp-code.png" alt="" className="header_qr-code" />
                  <div className="header__qr-apps">
                    <a href="#" className="header__qr-link"> <img src="assets/img/google_play.png" alt="" className="header__qr-download-img" /></a>
                    <a href="#" className="header__qr-link"><img src="assets/img/app_store.png" alt="" className="header__qr-download-img" /></a>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__navbar-item header__navbar-item--strong">Connect
              <a href="#" className="header__navbar-icon-link">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="header__navbar-icon-link">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
          <ul className="header__navbar-list">
            <li className="header__navbar-item"><a href="#" className="header__navbar-item-link">
              <i className="fas fa-bell" />
                Notification</a>
              <div className="header__notify">
                <div className="header__notify-header">
                </div>
              </div></li>
            <li className="header__navbar-item">
              <a href="#" className="header__navbar-item-link header__help ">
                <i className="far fa-question-circle" />
                Help
              </a>
            </li>
            <li className="header__navbar-item header__navbar-item-login header__navbar-item--separate">
              <a href="#" className="header__navbar-item-link ">Log-In</a>
            </li>
            <li className="header__navbar-item header__navbar-item-register">
              <a href="#" className="header__navbar-item-link">registration</a>
            </li>
            <li className="header__navbar-item header__navbar-item-user">
              <div className="header__navbar-user-img" style={{ backgroundImage: 'url(https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg)' }}>
              </div>
              <span className="header__navbar-user-name">Nguyễn Đăng Đức</span>
              <ul className="header__navbar-user-menu">
                <li className="header__navbar-user-item"><a href="#" className="header__navbar-user-item-link">Tài khoản của
                    tôi</a></li>
                <li className="header__navbar-user-item"><a href="/page/purchase.html" className="header__navbar-user-item-link">Đơn mua</a></li>
                <li  className="header__navbar-user-item header__navbar-user-item--separate"><a href="#" className="header__navbar-user-item-link" onClick={handleLogout}>Đăng xuất</a></li>
              </ul>
              {/* tạo thêm thẻ div vì cái thẻ li khi cho thuộc tính flex vào nó bị ảnh hưởng các thẻ li khác  */}
            </li>
          </ul>
        </nav>
        <div className="header-width-search">
          {/* đặt label vs input ở đây vì nó ngang cấp vs thanh header__search  */}
          <label htmlFor="header__mobile-search-checkbox" className="header__mobile-search">
            <i className="fas fa-search" />
          </label>
          <input type="checkbox" hidden id="header__mobile-search-checkbox" className="header__mobile-search-checkbox" />
          <div className="header__logo hide-on-tablet">
            <a href="#" className="header__logo-link">
              <img className="header-logo-img" src="./assets/img/logo.png" alt="" />
            </a>
          </div>
          <div className="header__search hide-on-mobile">
            <div className="header__search-input-wrap">
              {/* la cai bao bọc cho cái thêm vào ở trường hợp này là lịch sử tìm kiếm  */}
              <input type="text" className="header__search-input" placeholder="Tìm sản phẩm,thương hiệu và tên shop" />
              <div className="header__search-history">
                <h3 className="header__search-history-headding">Lịch sử tìm kiếm</h3>
                <ul className="header__search-history-list">
                  <li className="header__search-history-item"><a href="#">Chó nhật</a></li>
                  <li className="header__search-history-item"><a href="#">Chó Shiba Inu</a></li>
                </ul>
              </div>
            </div>
            <div className="header__search-select">
              <span className="header__search-select-lable">Trong shop</span>
              <i className="header__search-select-icon fas fa-chevron-down" />
              <ul className="header__search-option-list">
                <li className="header__search-option-item header__search-option-item--active">
                  <span>Trong shop</span>
                  <i className="fas fa-check" />
                </li>
                <li className="header__search-option-item">
                  <span>Ngoài shop</span>
                  <i className="fas fa-check" />
                </li>
              </ul>
            </div>
            <button className="header__search-btn">
              <i className="header__search-icon fas fa-search" />
            </button>
          </div>
          <div className="header__cart">
            <div className="header__cart-wrap">
              <a href="./page/cart.html">
                <i className="header__cart-icon fas fa-shopping-cart" />
                <span className="header__cart-notice">3</span>
              </a>
              <div className="header__cart-list">
                <img src="./assets/img/no_cart.jpg" className="header__cart-no-cart-img" alt="Không có thông tin sản phẩm" />
                <span className="header__cart-no-cart-msg">Không có sản phẩm</span>
                {/* co cart  */}
                <h4 className="header__cart-heading">Sản Phẩm Mới Thêm</h4>
                <ul className="header__cart-list-item">
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name">Chó shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name"> Chó Shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name"> Chó Shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name"> Chó Shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name"> Chó Shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                  <li className="header__cart-item">
                    <img src="https://kenh14cdn.com/thumb_w/660/2017/2373545713584488009515432111733942250897408n-1514196978625.jpg" className="header__cart-item-img" alt="" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <div className="header__cart-item-name-wrap">
                          <h5 className="header__cart-item-name"> Chó Shiba Inu</h5>
                        </div>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">100000</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-quanity">1</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <div className="header__cart-item-description-wrap">
                          <span className="header__cart-item-description">Phân loại bạc</span>
                        </div>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="header__cart-wiew-cart btn btn--primary">
                  Thêm sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="header__sort-bar">
        <li className="header__sort-item header__sort-item--active">
          <a href="#" className="header__sort-link">Đã mua</a>
        </li>
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">Mới nhất</a>
        </li>
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">Bán chạy</a>
        </li>
        <li className="header__sort-item">
          <a href="#" className="header__sort-link">Gía</a>
        </li>
      </ul>
    
      
    </header>
    </>
  );
}

export default Header;

