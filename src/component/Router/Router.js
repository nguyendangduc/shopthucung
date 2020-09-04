import React from "react";
import { Switch, Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThere from "./PageThere";

function Router(props) {
  return (
    <div>
      <Switch>
        <Route path="/page-1">
          <PageOne />
        </Route>
        <Route path="/page-2">
          <PageTwo />
        </Route>
        <Route path="/page-3">
          <PageThere />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
