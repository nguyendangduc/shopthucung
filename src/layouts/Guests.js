import React, {useContext, Suspense} from 'react';
import AppContext from 'AppContext';
import {renderRoutes} from "react-router-config";
import FnHeader from 'component/header/FnHeader';
import Banner from 'component/banner/Banner';
import Footer from 'component/footer/Footer';

const Guests = (props) => {
    const routes = useContext(AppContext);
    return <>
        <FnHeader/>
        <Banner/>
        <Suspense fallback={<div>Loading ..!</div>}>
            {renderRoutes(routes)}
        </Suspense>
        <Footer/>
    </>
}

export default Guests;
