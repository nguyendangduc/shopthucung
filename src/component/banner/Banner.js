import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="welcome-part-one">
        <div className="container">
          <div className="welcome-demop102 text-center">
            <h2>Welcome to Ask me, Awesome Questions &amp; Answer Template</h2>
            <p>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque
              <br /> habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit</p>
            <div className="button0239-item">
              <a href="#">
                <button type="button" className="aboutus022">About Us</button>
              </a>
              <a href="#">
                <button type="button" className="join92">Join Now</button>
              </a>
            </div>
            <div className="form-style8292">
              <div className="input-group"> <span className="input-group-addon"><i className="fa fa-pencil-square" aria-hidden="true" /></span>
                <input type="text" className="form-control form-control8392" placeholder="Ask any question and you be sure find your answer ?" /> <span className="input-group-addon"><a href="#">Ask Now</a></span> </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;