import React from "react";
import { WishListContext } from "../Context/WishListContext";

export default () => (
  <WishListContext.Consumer>
    {context => <div>{context.productsInWishlist.length}</div>}
  </WishListContext.Consumer>
);
