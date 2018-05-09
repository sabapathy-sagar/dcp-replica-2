import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import WishList from "./WishList/WishList";
import Products from "./Products/Products";
import Pdp from "./Pdp/Pdp.js";
import "bulma/css/bulma.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Header />
    <div class="has-background-black-ter">
      <div class="columns is-mobile">
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/">
            Home
          </Link>
        </div>
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/products">
            Products
          </Link>
        </div>
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/wishlist">
            Wishlist
          </Link>
        </div>
      </div>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/wishlist" component={WishList} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/pdp/:id" component={Pdp} />
    </div>
    <Footer />
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
