window.onload = function() {
    const modal = document.querySelector(".modal")
        const switchBtns = document.querySelectorAll(".authenticate-form__switch-btn")// lấy nhiều pt == với ${class}
        const registerForm = document.querySelector(".authenticate-form--register")
        const loginForm = document.querySelector(".authenticate-form--login")
        let stateForm = 1
        switchBtns.forEach(element => {// tương đương onclick ở 2 nut
            element.onclick = function () {
                if (stateForm === 1) {
                    modal.style.display = "flex"
                    loginForm.style.display = "none"
                    registerForm.style.display = "block"
                    stateForm = 2
                } else if (stateForm === 2) {
                    modal.style.display = "flex"
                    loginForm.style.display = "block"
                    registerForm.style.display = "none"
                    stateForm = 1
                }
            }
        });
}