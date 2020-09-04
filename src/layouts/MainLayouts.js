import React, { useState, useContext, useLayoutEffect, useEffect } from "react";
import AppContext from "AppContext";
import ContainerLayouts from "./ContainerLayouts";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { useSelector, useDispatch } from "react-redux";
import { setMessage, setLayout, setDataForHome } from "store/actions";

// ben trong withRouter se goi ntn.
// <MainLayouts {...props} />
const MainLayouts = (props) => {
  const dispatch = useDispatch();
  const { layout, dataForHome } = useSelector(({ configs }) => configs);
  const settings = useSelector(({ settings }) => settings);
  
  console.log("dataForHome", dataForHome);
  useEffect(() => {
    dispatch(setDataForHome());
    dispatch(setMessage("warning", "Data warning . !"));
  }, []);

  const routes = useContext(AppContext);
  useLayoutEffect(() => {
    const matched = matchRoutes(routes, props.location.pathname)[0];
    if (matched && matched.route.settings) {
      console.log("matched route", matched);
      const { layout } = matched.route.settings;
      dispatch(setLayout(layout));
    }
  }, [props.location.pathname, routes]);

  const Layout = ContainerLayouts[layout];
  return <Layout {...props} />;
};

export default withRouter(React.memo(MainLayouts));
