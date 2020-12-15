import React, { useEffect } from 'react';
import Slide from './slider/Slide'
import { get_slider_request } from 'store/actions/sliderAction'
import { useDispatch, useSelector } from 'react-redux'

function Slider(props) {
  const dispatch = useDispatch()
  let {listSlide} = useSelector(({sliderReducer}) => sliderReducer)
  useEffect(() => {
    dispatch(get_slider_request())
  }, [])
  return (
    <>
      <div className="l-12 m-12 c-12 slider-container">
        <div id="slider">
          <div className="slider-with-carousel">
            <div className="slider-with-ctr">
              <div className="list-slider-box">
                <div className="list-slide">
                  {listSlide.length > 0 ? listSlide.map((slide, index) => <Slide key={index} index={index} slide={slide} />) : ''}
                  {/* key khong the truyen prop , nen phai them index  */}
                </div>
              </div>
              <div className="slider-btn">
                <div className="prev"><span className="ti-angle-left" /></div>
                <div className="next"><span className="ti-angle-right" /></div>
              </div>
            </div>
            <ul className="option-list">
              <li data-id={0} className="option selected" />
              <li data-id={1} className="option" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;