import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "router/common/routes";
import AppContext from "./AppContext";
import MainLayouts from "layouts/MainLayouts";
import store from "store";
import Authorization from 'auth/Authorization';
import Auth from 'auth/Auth';

function App() {
  return (
    <AppContext.Provider value={routes}>
      <Provider store={store}>
        <Auth>
          <Router>
            <Authorization>
              <MainLayouts />
            </Authorization>
          </Router>
        </Auth>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
