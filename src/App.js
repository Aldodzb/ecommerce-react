import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./homepage/homepage.js";
import Products from "./products/card-product";
import Toolbar from "./layout/toolbar.js";

import "./App.css";

function App() {
  return (
    <div>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="*" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

//       <Route path="/:id" component={UserPage} /> <Route exact path="/products" component={HomePage} /> <Route exact path="/" component={HomePage} />
