import React from 'react';
import Header from 'component/header/Header'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'
import CartComponent from '../../component/cart/CartComponent'
function Cart(props) {
    return (
        <>
            <div id="cart">
                <Header />
                <CartComponent />
                <Footer />
                <ModalRoot />
            </div>
        </>
    );
}

export default Cart;