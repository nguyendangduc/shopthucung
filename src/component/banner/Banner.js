import React from 'react';
import Slider from './Slider/Slider'
function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="grid">
          <div className="row">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;