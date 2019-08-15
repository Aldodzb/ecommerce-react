import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./homepage/homepage.js";
import Products from "./products/card-product";
import AddProducts from "./products/add-product/add-product";
import Toolbar from "./layout/toolbar.js";
import "./App.css";

import ToDO from "./pages/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <div>
      <ReduxProvider store={reduxStore}>
        <Toolbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/todo" component={ToDO} />
          <Route exact path="/products/add" component={AddProducts} />
          <Route exact path="*" component={HomePage} />
          <Route component={HomePage} />
        </Switch>
      </ReduxProvider>
    </div>
  );
}

export default App;

//       <Route path="/:id" component={UserPage} /> <Route exact path="/products" component={HomePage} /> <Route exact path="/" component={HomePage} />
