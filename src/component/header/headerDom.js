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
 
  }