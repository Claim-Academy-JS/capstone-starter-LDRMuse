import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ClientChart,
  ClientData,
  Four04,
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
        {/* TODO{melissa.heying}: ⚠️Only if user is logged in! */}
        <Header />
        <ClientData />
      </Route>

      <Route>
        <Four04 />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
