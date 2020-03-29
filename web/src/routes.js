import React from "react";

import { Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/incidents/new" component={NewIncident} />
    </Switch>
  );
}
