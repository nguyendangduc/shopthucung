import React from 'react';
import {change_quantity_request, delete_cart_item_request} from 'store/actions/product/productAction'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
function CartItem(props) {
  const dispatch = useDispatch()
    const {item} = props
    const changeQuantity = (param) => {
      console.log(props)
      dispatch(change_quantity_request(props.id,param))
    }
    const handleDelete = async () => {
      const confirm = await swal("Are you sure?", {
        dangerMode: true,
        buttons: true,
      });
      if(confirm === true) {
        dispatch(delete_cart_item_request(props.id))
      }
    }
    return (
        <>
            <div className="cart-tb-body__item row">
        <div className="cart-tb-body__img col l-2 m-2 c-3">
          <img src={item.image} alt="" />
        </div>
        <div className="cart-tb-body__info col l-2 m-2 c-4">
          <p className="cart-tb-body__name">{item.name}</p>
          <span className="cart-tb-body__id hidden-on-mobile">id:{item.id}</span>
        </div>
        <div className="cart-tb-body__cate col l-2 m-2 c-0">{item.name}</div>
        <div className="cart-tb-body__price col l-2 m-2 c-2">{item.price}</div>
        <div className="cart-tb-body__quantity col l-2 m-2 c-2">
          <span className="quantity">{item.quantity}</span>
          <button onClick={() => changeQuantity(1)} >+</button>
          <button onClick={() => changeQuantity(-1)} >-</button>
        </div>
        <div className="cart-tb-body__total col l-1 m-1 c-0">{item.total}</div>
        <div className="cart-tb-body__btn col l-1 m-1 c-1">
          <button className="btn delete-item" onClick={handleDelete}>x</button>
        </div>
      </div>   
        </>
    );
}

export default CartItem;