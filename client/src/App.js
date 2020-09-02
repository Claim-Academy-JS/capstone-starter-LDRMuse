import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ClientChart,
  ClientData,
  Footer,
  GetStarted,
  Header,
  Home,
  Login,
} from "./components";

import "./App.scss";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Header />
        <Login />
      </Route>

      <Route exact path="/get-started">
        <Header />
        <GetStarted />
      </Route>

      <Route exact path="/clients/add">
        <Header />
        <ClientChart />
      </Route>

      <Route exact path="/clients/data">
        {/* only if user is logged in */}
      </Route>
    </Switch>
    <Footer />
  </Router>
);
