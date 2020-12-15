import React, { useEffect, useState } from 'react';
import CartItem from './CartItem'
import CartForm from './CartForm'
import { useDispatch, useSelector } from 'react-redux'
import { add_cart } from 'store/actions/product/productAction'
import swal from 'sweetalert'
import RoutesUtils from 'utils/RoutesUtils'
import { withRouter } from 'react-router-dom'
const CartComponent = (props) => {
  const { history } = props
  const [formShowed, setFormShowed] = useState(false)
  const cartStorage = { ...JSON.parse(window.localStorage.getItem('cart')) }
  const dispatch = useDispatch()
  const { featureProductsReducer, userReducer } = useSelector(state => state)
  const { cart } = featureProductsReducer
  const { user, listUserRules } = userReducer
  useEffect(() => {
    dispatch(add_cart(cartStorage))
    if (JSON.stringify(cartStorage) === "{}") {
      swal("Không có sản phẩm trong giỏ");
    }
  }, [])
  const cartItemList = (cart) => {
    let list = []
    for (let key in cart) {
      list = [...list, <CartItem id={key} key={key} item={cart[key]} />]
    }

    return list
  }
  const showModal = () => {
    if (RoutesUtils.isCustomerAccount(listUserRules)) {
      if (JSON.stringify(cart) != "{}") {
        return setFormShowed(true)
      } else if (JSON.stringify(cartStorage) === "{}") swal("Bạn chưa thêm sản phầm nào vào giỏ!");
    } else {
      history.push('/login')
    }
    return setFormShowed(false)
  }
  const closeModal = () => {
    setFormShowed(false)
  }
  return (
    <>
      <div className="main">
        <div className="grid">
          <div className="cart-header">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="../index.html" className="menu-link btn">Home</a>
              </li>
              <li className="menu-item">Shopping Cart</li>
            </ul>
          </div>
          <div className="cart-tb">
            <div className="cart-tb-header hide-on">
              <div className="cart-tb-header__list row">
                <div className="cart-tb-header__item col l-2 m-2 c-3">Item</div>
                <div className="cart-tb-header__item col l-2 m-2 c-4">Name</div>
                <div className="cart-tb-header__item col l-2 m-2 c-0">Category</div>
                <div className="cart-tb-header__item col l-2 m-2 c-2">Price</div>
                <div className="cart-tb-header__item col l-2 m-2 c-2">SL</div>
                <div className="cart-tb-header__item col l-1 m-1 c-0">Total</div>
                <div className="col l-1 m-1 c-1" />
              </div>
            </div>
            <div className="cart-tb-body">
              <div className="cart-tb-body__list">
                {cartItemList(cart)}
              </div>
            </div>
            <span className="total-notification" />
            <button onClick={showModal} className="btn cart-tb-submit">
              Đặt hàng
            </button>
          </div>
          {
            formShowed ?
              <CartForm
                closeModal={closeModal}
                cart={cart}
                isCustomerAccount={() => RoutesUtils.isCustomerAccount(listUserRules)}
              />
              : ''
          }
        </div>
      </div>
    </>
  );
};

export default withRouter(CartComponent);