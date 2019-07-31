import React from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage/homepage.js";
import Products from "./products/card-product";
import Toolbar from "./layout/toolbar.js";

import "./App.css";

function App() {
  return (
    <div>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;

//       <Route path="/:id" component={UserPage} /> <Route exact path="/products" component={HomePage} /> <Route exact path="/" component={HomePage} />
