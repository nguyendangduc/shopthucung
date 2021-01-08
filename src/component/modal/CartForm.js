import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {order_request} from 'store/actions/product/productAction'
import {useHistory} from 'react-router-dom'
import {update_cart} from 'store/actions/product/productAction'
import {set_modal} from 'store/actions/modalAction'
function CartForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {userReducer, featureProductsReducer,modalData} = useSelector(state => state)
    const {user} = userReducer
    console.log(userReducer)
    let {cart} = featureProductsReducer
    const checkPhone = (phoneNum) => {  
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (phoneNum !== '') {
            if (vnf_regex.test(phoneNum) == false) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    
    const submit = () => {
        const nameTxt = document.querySelector("#name")
        const phoneNum = document.querySelector("#phone")
        const addressTxt = document.querySelector("#address")
        let check = true
        if (nameTxt.value === '' && nameTxt.value.trim() === '') {
            check = false
            nameTxt.parentNode.querySelector('p').innerHTML = 'Vui lòng điền vào trường này!'
        } else {
            nameTxt.parentNode.querySelector('p').innerHTML = ''
        }
        if (phoneNum.value === '' && phoneNum.value.trim() === '') {
            check = false
            phoneNum.parentNode.querySelector('p').innerHTML = 'Vui lòng điền vào trường này!'
        } else {
            if (checkPhone(phoneNum.value) === false) {
                check = false
                phoneNum.parentNode.querySelector('p').innerHTML = 'Sai định dạng số điện thoại!'
            } else {
                phoneNum.parentNode.querySelector('p').innerHTML = ''
            }
        }
        if (addressTxt.value === '' && addressTxt.value.trim() === '') {
            check = false
            addressTxt.parentNode.querySelector('p').innerHTML = 'Vui lòng điền vào trường này!'
        } else {
            addressTxt.parentNode.querySelector('p').innerHTML = ''
        }
        if(check) {
        
            let totalPrice = 0;
            for(let key in cart) {
                totalPrice += cart[key].total
            }
            totalPrice = Math.round(totalPrice *100)/ 100
            const booking = {
                name: nameTxt.value,
                phone: phoneNum.value,
                address: addressTxt.value
            }
            const date = new Date()
            const today = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
            const order = {
                idUser: user.id,
                cart: cart,
                totalPrice: totalPrice,
                booking: booking,
                date: today,
                state: 1, 
                idStaff: -1           
            }
            dispatch(order_request(order))
            dispatch(update_cart({}))
            // doan nay tinh tiep viec xac nhan dispatch thanh cong
            dispatch(set_modal(''))
            setTimeout(function () {
                // vua thay do location vua thay doi store
                history.push('/purchase')
            }, 2000)
        }
    }
    return (
        <>
            
                <div className="cart-form-wrap">
                    <form className="cart-form">
                        <h1 className="cart-header">Địa chỉ nhận hàng</h1>
                        <div className="cart-form-group">
                            <div className="cart-form__input-group">
                                <label className="cart-form__label" htmlFor="name">Họ và tên</label>
                                <input id="name" type="text" className="cart-form__input" />
                                <p style={{color: 'red',height: '2rem'}}></p>
                            </div>
                        </div>
                        <div className="cart-form-group">
                            <div className="cart-form__input-group">
                                <label className="cart-form__label" htmlFor="phone">Số điện thoại</label>
                                <input id="phone" type="number" className="cart-form__input" />
                                <p style={{color: 'red',height: '2rem'}}></p>
                            </div>
                        </div>
                        <div className="cart-form-group">
                            <div className="cart-form__input-group">
                                <label className="cart-form__label" htmlFor="address">Địa chỉ</label>
                                <input id="address" type="text" className="cart-form__input" />
                                <p style={{color: 'red',height: '2rem'}}></p>

                            </div>
                        </div>
                    </form>
                    <div className="btn-control">
                        <div onClick={submit} className="cart-btn btn">Đặt hàng</div>
                        <div onClick={() => {dispatch(set_modal(''))}}  className="cart-btn btn cart-btn--cancel">Quay lại</div>
                    </div>
                </div>
            

        </>

    );
}

export default CartForm;