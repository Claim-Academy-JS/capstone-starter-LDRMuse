
import React from "react"
import logo from "./logo.svg"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { ClientChart, Header, Home, Login, ClientData } from "./components"
import { GetStarted } from "components/base/GetStarted"

import "./App.scss"


function App() {
  return (
    <Router>
      <Route exact={true} path="/">
        <Home />
      </Route>


      <Route exact={true} path="/add-client">
        <Header />
        <ClientChart />
      </Route>

      <Switch>
        <Route exact={true} path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact={true} path="/users">
          <Header />
          <GetStarted />
        </Route>


        <Route exact path="/view-client">
          <Header />
          <ClientData />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
