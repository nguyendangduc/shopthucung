import React, { useContext } from "react";
import AppContext from "AppContext";
import { renderRoutes } from "react-router-config";
import FnHeader from "component/header/FnHeader";
import Footer from "component/footer/Footer";

const Admin = (props) => {
  const routes = useContext(AppContext);
  return (
    <>
      <FnHeader />
      <h3>Admin</h3>
      {renderRoutes(routes)}
      <Footer />
    </>
  );
};

export default Admin;
