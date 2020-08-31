import React from "react"
import logo from "./logo.svg"
import "./App.scss"

import { ClientChart, Home, Header, Login } from './components'

function App() {

  return (
    <>
    <Header />
    <Home />
    <Login />
    <ClientChart />
    </>
  )
}

export default App
