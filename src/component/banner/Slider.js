import React, { useEffect } from 'react';
import Slide from './Slide'
import { useDispatch, useSelector } from 'react-redux'

function Slider(props) {
  const dispatch = useDispatch()
  let {listSlide} = useSelector(({sliderReducer}) => sliderReducer)

  useEffect(() => {
    
let slider = document.querySelector('#slider')
let sliderWCtr = slider.querySelector(".slider-with-ctr")
let listSlide = slider.querySelector(".list-slide")
let navigator = slider.querySelector('.option-list')
let currentWidth = listSlide.clientWidth
let totalItem = navigator.querySelectorAll('.option').length
let totalWidth = totalItem * currentWidth
let nextBtn = sliderWCtr.querySelector('.next')
let prevBtn = sliderWCtr.querySelector('.prev')
let optionList = document.querySelectorAll(".option-list li")
let left = 0
let index = 0
nextBtn.onclick = function () {
    left = left - currentWidth
    if (-left >= totalWidth) {
        left = 0
    }
    listSlide.style.left = left + 'px'

    index = -(left / currentWidth)
    updateNav(navigator, index)
}

prevBtn.onclick = function () {
    left = left + currentWidth
    if (left > 0) {
        left = -(totalWidth - currentWidth)
    }
    listSlide.style.left = left + 'px'

    index = -(left / currentWidth)
    updateNav(navigator, index)
}

// let autolook = setInterval(function(){
//     nextBtn.click()
// },3000)
// sliderWCtr.addEventListener('mouseenter', function(){
//     clearInterval(autolook)
// })
// sliderWCtr.addEventListener('mouseleave', function(){
//     autolook = setInterval(function(){
//         nextBtn.click()
//     },3000)
// })
// navigator.addEventListener('mouseenter', function(){
//     clearInterval(autolook)
// })
// navigator.addEventListener('mouseleave', function(){
//     autolook = setInterval(function(){
//         nextBtn.click()
//     },3000)
// })
window.onresize = updateWidthSlide


// define function
function updateNav(navigator, index) {
    navigator.querySelector('.selected').setAttribute('class', 'option')
    navigator.querySelectorAll('li')[index].setAttribute('class', 'option selected')
}
optionList.forEach(option => {
    option.onclick = changeSlide
});
function changeSlide(event) {

    let currentWidth = slider.querySelector('.slide').clientWidth
    let index = event.target.getAttribute('data-id')
    index = Number(index)
    left = -(index) * currentWidth
    listSlide.style.left = left + 'px'
    updateNav(navigator, index)
}
function updateWidthSlide() {
    const nextWidth = slider.querySelector('.slide').clientWidth// trong function dinh nghia thi ko lo ve select
    currentWidth = nextWidth//screen change -> slideWidth change
    totalWidth = totalItem * currentWidth // thay doi tong width de so sanh 
    left = -index * currentWidth  // width thay doi -> left phai thay doi , lien tương người béo
    listSlide.style.left = left + 'px' // thay đổi  ngay khi cap nhật khung hình
}
  })
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