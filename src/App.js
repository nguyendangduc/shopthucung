import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import AppContext from 'AppContext';
import Authorization from 'auth/Authorization'
import routes from 'router/common/routes'
import store from 'store'
import Auth from 'auth/Auth'
function App() {
  return (
    <>
      <AppContext.Provider value={routes} >
        <Provider store={store} >
          <Auth>
            <BrowserRouter>
              <Authorization>
                <Suspense fallback={<div>Loading...!</div>}>
                  {renderRoutes(routes)}
                </Suspense>
              </Authorization>
            </BrowserRouter>
          </Auth>
        </Provider>
      </AppContext.Provider>

    </>


  );
}

export default App;
