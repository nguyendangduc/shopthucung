import React from 'react';
import Header from 'component/header/Header'
import Banner from 'component/banner/Banner'
import Main from 'component/main/Main'
import Footer from 'component/footer/Footer'
import Modal from 'component/modal/Modal'

function Home(props) {
    return (
        <>
            <div id="home">
                <Header />
                <Banner />
                <Main />
                <Footer />
                <Modal />
            </div>
        </>
    );
}

export default Home;