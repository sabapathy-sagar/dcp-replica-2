import React from "react";
import { WishListContext } from "../Context/WishListContext";

export default () => {
  return (
    <WishListContext.Consumer>
      {context => <p>In Wishlist: {context.productsInWishlist.length}</p>}
    </WishListContext.Consumer>
  );
};
