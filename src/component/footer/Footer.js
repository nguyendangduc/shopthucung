import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section className="footer-social">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Copyright 2017 Ask me | <strong>Sudo  Coder</strong></p>
            </div>
            <div className="col-md-6">
              <div className="social-right2389"> <a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a> <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a> <a href="#"><i className="fa fa-skype" aria-hidden="true" /></a> <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> <a href="#"><i className="fa fa-rss" aria-hidden="true" /></a> </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;