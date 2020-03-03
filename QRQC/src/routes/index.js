import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${process.env.PUBLIC_URL}/ManagementPDCA`}
        component={asyncComponent(() => import("./ManagementPDCA"))}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/Attendants`}
        component={asyncComponent(() => import("./Attendants"))}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/Issuelist`}
        component={asyncComponent(() => import("./Issuelist"))}
      />
    </Switch>
  </div>
);

export default App;
