import React, {useState, useEffect} from "react";
import {API} from "const";
import {RequestUtils} from "utils";
import {Link} from "react-router-dom";

const FnHeader = (props) => {
    const [menu, setMenu] = useState([]);
    useEffect (() => {
      let isCancelled = false;
      ( async () => {
        const menus = await RequestUtils.Get(API.MENU);
        if (!isCancelled)
          setMenu(menus);
      })();
      return () => {
        isCancelled = true;
      };
    }, [] );

    return <>
      <div className="top-menu-bottom932">
          <nav className="navbar navbar-default">
              <div className="container">
                  {/* Brand and toggle get grouped for better mobile display */}
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"/>
                          <span className="icon-bar"/>
                          <span className="icon-bar"/>
                      </button>
                      <a className="navbar-brand" href="#">
                          <img src="/image/logo.png" alt="Logo"/>
                      </a>
                  </div>
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
                      <ul className="nav navbar-nav"></ul>
                      <ul className="nav navbar-nav navbar-right">
                          {menu.length > 0 &&
                          menu.map((item, id) => {
                              return (
                                  <li key={id}>
                                      <Link to={item.route}>{item.name}</Link>
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
    </>;
};

export default FnHeader;
