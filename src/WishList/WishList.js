import React from "react";
import { WishListContext } from "../Context/WishListContext";
import ClearWishList from "./ClearWishList";
import LoginAds from "../Login/LoginAds";
import WishListCount from "./WishListCount";

export default () => (
  <WishListContext.Consumer>
    {context => (
      <div>
        <LoginAds text="Log on to access more features" />
        <div>
          {context.productsInWishlist.map(product => <div>{product.name}</div>)}
        </div>
        <ClearWishList />
      </div>
    )}
  </WishListContext.Consumer>
);
