import React from 'react';
import Header from 'component/header/Header'
import Footer from 'component/footer/Footer'
import Modal from 'component/modal/Modal'
import CartComponent from '../../component/cart/CartComponent'
function Cart(props) {
    return (
        <>
            <div id="cart">
                <Header />
                <CartComponent />
                <Footer />
                <Modal />
            </div>
        </>
    );
}

export default Cart;