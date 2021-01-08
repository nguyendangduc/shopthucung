import React from 'react';
import Slider from './Slider'
function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="grid">
          <div className="row">
            <div className="l-12 m-12 c-12 slider-container">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;