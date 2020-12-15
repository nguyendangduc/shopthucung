import React from 'react';
import Header from 'component/header/Header'
import DetailComponent from 'component/detail/DetailComponent'
import Footer from 'component/footer/Footer'
import Modal from 'component/modal/Modal'

function detail(props) {
    return (
        <>
            <div id="detail">
                <Header />
                <DetailComponent />
                <Footer />
                <Modal />
            </div>
        </>
    );
}

export default detail;