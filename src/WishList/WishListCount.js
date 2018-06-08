import React from "react";
import { WishListContext } from "../Context/WishListContext";

export default () => {
  return (
    <WishListContext.Consumer>
      {context => <div>{context.productsInWishlist.length}</div>}
    </WishListContext.Consumer>
  );
};
