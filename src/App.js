import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "router/common/routes";
import AppContext from "./AppContext";
import MainLayouts from "layouts/MainLayouts";
import store from "store";

function App() {
  console.log("routes", routes);
  return (
    <AppContext.Provider value={routes}>
      <Provider store={store}>
        <Router>
          <MainLayouts />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
