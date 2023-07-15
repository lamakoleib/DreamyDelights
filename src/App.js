import Navbar from "./Navbar"
import RequestForm from "./RequestForm"
import Cakes from "./Cakes"
import MiniNav from "./MiniNav"
import Home from "./Home"
import PhotoGallery from "./PhotoGallery"
import Receipt from "./Receipt"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import React from "react"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>

            <Route exact path="/photogallery">
            <Navbar />
              <PhotoGallery />
            </Route>

            <Route exact path="/cakes">
            <Navbar />
              <Cakes />
            </Route>

            <Route exact path="/rqform">
            <Navbar />
              <RequestForm />
            </Route>

            <Route exact path="/receipt">
            <Navbar />
              <Receipt />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
