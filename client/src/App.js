import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  CreateOrSearchClient,
  ClientChartEntry,
  Four04,
  Footer,
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

      <Route exact path="/clients/create">
        <Header />
        <CreateOrSearchClient />
      </Route>

      <Route exact path="/clients/chart-entry">
        {/* TODO{melissa.heying}: ⚠️Only if user is logged in! */}
        <Header />
        <ClientChartEntry />
      </Route>

      <Route>
        <Four04 />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
