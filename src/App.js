import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
