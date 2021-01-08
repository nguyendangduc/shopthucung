import React from 'react';
import ProductItem from './productItem';
import ProductCtl from './productCtl';
function OrderItem(props) {
    const {order} = props;
    const {cart} = order;
    const listProductInOneOrder = () => {
        let listProduct = []
        for(let key in cart) {
            listProduct = [...listProduct, <ProductItem key={key} item={cart[key]} />];
        }
        return listProduct
    }
    console.log(listProductInOneOrder())
    return (
        <>
            <li className="order">
            {listProductInOneOrder()}
            <ProductCtl totalPrice = {order.totalPrice} state = {order.state} id ={order.id}/>
            </li>

        </>
    );
}

export default OrderItem;