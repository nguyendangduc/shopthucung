import React from 'react';
import Header from 'component/header/Header'
import PurchaseComponent from 'component/purchase/Purchase'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'

function Purchase(props) {
    return (
        <>
            <div id="purchase">
                <Header />
                <PurchaseComponent />
                <Footer />
                <ModalRoot />
            </div>
        </>
    );
}

export default Purchase;