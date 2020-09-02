import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ClientChart, Header, Home, Login, Footer } from "./components";
import { GetStarted } from "components/base/GetStarted";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/client-chart">
          <Header />
          <ClientChart />
        </Route>

        <Route exact={true} path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact={true} path="/users">
          <Header />
          <GetStarted />
        </Route>

        <Route exact path="/client-chart">
          {/* only if user is logged in */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
