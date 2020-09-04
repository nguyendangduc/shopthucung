import React, {useContext} from 'react';
import AppContext from 'AppContext';
import { renderRoutes } from "react-router-config";
import FnHeader from 'component/header/FnHeader';
import Banner from 'component/banner/Banner';
import Footer from 'component/footer/Footer';

const Guests = (props) => {
  const routes = useContext(AppContext);
  return <>
    <FnHeader />
    <Banner />
    {renderRoutes(routes)}
    <Footer />
  </>
}

export default Guests;