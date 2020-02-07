import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Products from "./components/Product";
import AddProduct from "./components/AddProducts";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/AddProduct" component={AddProduct} />
          <Route exact path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
