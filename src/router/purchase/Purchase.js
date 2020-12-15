import React from 'react';
import Header from 'component/header/Header'
import PurchaseComponent from 'component/purchase/Purchase'
import Footer from 'component/footer/Footer'
import Modal from 'component/modal/Modal'

function Purchase(props) {
    return (
        <>
            <div id="purchase">
                <Header />
                <PurchaseComponent />
                <Footer />
                <Modal />
            </div>
        </>
    );
}

export default Purchase;