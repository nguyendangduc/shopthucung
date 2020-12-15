window.onload = function() {
  // $(document).ready(function()
// {
//   //====================================hiện modal====================
//     $(".header__navbar-item-login a").click(function(){
//       $(".modal").addClass("modal--show");
//       $('.modal [data-auth]').attr('data-auth','login')
//     });
//     $(".header__navbar-item-register").click(function(){
//       $(".modal").addClass("modal--show");// hien tat ca 
//       $('.modal [data-auth]').attr('data-auth', 'register')
//     //  document.querySelector('.modal [data-auth]').setAttribute('data-auth','register')
//     });
// //====================================nút chuyển đổi=======================
//     $(".authenticate-form__switch-btn").click(function(){
//       console.log('a')
//      if($('.modal [data-auth]').attr('data-auth')=='login')
//      {
//        $($('.modal [data-auth]')).attr('data-auth','register')
//      } else {
//        $($('.modal []')).attr('data-auth','login')
//      }
//     });
// // //===========================nút back===============================
//     $(".authenticate-form__controls-back").click(function(){
//         $(".modal").removeClass("modal--show");
//     });
// });

const modal = document.querySelector(".modal")
const loginBtn = document.querySelector(".header__navbar-item-login a")
const registerBtn = document.querySelector(".header__navbar-item-register")// chỉ lấy 1 pt
const switchBtns = document.querySelectorAll(".authenticate-form__switch-btn")// lấy nhiều pt == với ${class}
const cancelBtns = document.querySelectorAll(".authenticate-form__controls-back")
const registerForm = document.querySelector(".authenticate-form--register")
const loginForm = document.querySelector(".authenticate-form--login")
let stateForm = 0
loginBtn.addEventListener("click", function() {

  modal.style.display = "flex"
  loginForm.style.display = "block"
  registerForm.style.display = "none"
  stateForm = 1
})
registerBtn.addEventListener("click", function() {
  modal.style.display = "flex"
  loginForm.style.display = "none"
  registerForm.style.display = "block"
  stateForm = 2
})
switchBtns.forEach(element => {// tương đương onclick ở 2 nut
  element.onclick = function() {
    if(stateForm === 1) {
      registerBtn.click()
      stateForm = 2
    } else if(stateForm === 2) {
      loginBtn.click()
      stateForm = 1
    }
  }
});
cancelBtns.forEach(e => {
  e.addEventListener("click", function() {
    modal.style.display = "none"
    stateForm = 0
  })
});

// =================================slider =================================

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
}