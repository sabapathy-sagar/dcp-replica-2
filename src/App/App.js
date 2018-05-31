import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import WishList from "../WishList/WishList";
import Products from "../Products/Products";
import Pdp from "../Pdp/Pdp.js";
import Login from "../Login/Login";
import { LoginContext } from "../Context/LoginContext";
import { WishListContext } from "../Context/WishListContext";
import withStorage from "../Helper/withStorage";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      productsInWishlist: []
    };
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.updateWishlist = this.updateWishlist.bind(this);
  }
  componentDidMount() {
    const isAuthenticated = JSON.parse(this.props.load("isAuthenticated"));
    const wishListProducts = JSON.parse(this.props.load("wishListProducts"));

    const setAuthenticationState = () => {
      if (isAuthenticated) {
        this.setState({
          isAuthenticated
        });
      }
    };
    const setWishlistState = () => {
      this.setState({
        productsInWishlist: wishListProducts
      });
    };

    setAuthenticationState();
    setWishlistState();
  }
  componentDidUpdate() {
    this.props.save(
      "wishListProducts",
      JSON.stringify(this.state.productsInWishlist)
    );
  }
  handleAuthentication() {
    this.setState(prevState => {
      this.props.save("isAuthenticated", !prevState.isAuthenticated);
      return {
        isAuthenticated: !prevState.isAuthenticated
      };
    });
  }

  updateWishlist(product) {
    this.setState(prevState => ({
      productsInWishlist: prevState.productsInWishlist.concat(product)
    }));
  }
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        <WishListContext.Provider
          value={{
            ...this.state,
            updateWishlist: this.updateWishlist
          }}
        >
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
                  <Link
                    class="button is-white is-outlined is-medium"
                    to="/products"
                  >
                    Products
                  </Link>
                </div>
                <div class="column ">
                  <Link
                    class="button is-white is-outlined is-medium"
                    to="/wishlist"
                  >
                    Wishlist
                  </Link>
                </div>
              </div>
              <Login
                isAuthenticated={this.state.isAuthenticated}
                authCb={this.handleAuthentication}
              />
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/wishlist" component={WishList} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/pdp/:id" component={Pdp} />
              </Switch>
            </div>
            <Footer />
          </div>
        </WishListContext.Provider>
      </LoginContext.Provider>
    );
  }
}

const WrappedComponent = withStorage(App);

export default WrappedComponent;
