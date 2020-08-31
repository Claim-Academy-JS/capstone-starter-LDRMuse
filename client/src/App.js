
import React from "react"
import logo from "./logo.svg"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { ClientChart, Header, Home, Login } from "./components"

import "./App.scss"

function App() {
  return (
    <Router>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Switch>
        <Route exact={true} path="/login">
        <Header />
          <Login />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/client-chart">
        {/* only if user is logged in */}
        </Route>
      </Switch>
    </Router>

  )
}

export default App
