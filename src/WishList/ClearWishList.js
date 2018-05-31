import React from "react";
import { LoginContext } from "../Context/LoginContext";
import { WishListContext } from "../Context/WishListContext";

export default class ClearWishList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoginContext.Consumer>
        {login => (
          <WishListContext.Consumer>
            {wishlist =>
              login.isAuthenticated && (
                <button onClick={wishlist.clearWishlist}>Clear Wishlist</button>
              )
            }
          </WishListContext.Consumer>
        )}
      </LoginContext.Consumer>
    );
  }
}
