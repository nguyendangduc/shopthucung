import React from 'react';

function Footer(props) {
    return (
      <>
      <footer className="footer">
      <div className="grid wide footer__content">
        {/* tạo ra để padding */}
        <div className="row sm-gutter">
          <div className="col l-2-4 m-4 c-6">
            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Shopee Blog</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Shopee Mail</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Hướng Dẫn Bán Hàng</a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 m-4 c-6">
            <h3 className="footer__heading">Về shopet</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Shoppet Mail</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">Hướng Dẫn Bán Hàng</a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 m-4 c-6 hide-on-mobile-tablet">
          </div>
          <div className="col l-2-4 m-4 c-6">
            <h3 className="footer__heading">Theo dõi chúng tối trên</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  <i className="fab fa-facebook footer-item__icon" />
                  Facesbook
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  <i className="fab fa-instagram footer-item__icon" />
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  <i className="fab fa-linkedin footer-item__icon" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 m-4 c-6 tl-mrt20">
            <h3 className="footer__heading">Tải ứng dụng shopet ngay thôi</h3>
            <div className="footer__download">
              <img src="./assets/img/sp-code.png" alt="" className="footer__download-qr" />
              <div className="footer__download-apps">
                <a href="#" className="footer__download-app-link">
                  <img src="./assets/img/app_store.png" alt="App Store" className="footer__download-app-img" />
                </a>
                <a href="#" className="footer__download-app-link">
                  <img src="./assets/img/google_play.png" alt="Google Play" className="footer__download-app-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </>
    );
}

export default Footer;