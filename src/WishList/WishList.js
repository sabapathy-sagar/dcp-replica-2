import React from "react";
import { WishListContext } from "../Context/WishListContext";
import ClearWishList from "./ClearWishList";
import LoginAds from "../Login/LoginAds";
import WishListCount from "./WishListCount";

export default class WishList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WishListContext.Consumer>
        {context => (
          <div>
            <LoginAds text="Log on to access more features" />
            <WishListCount />
            <div>
              {context.productsInWishlist.map(product => (
                <div>{product.name}</div>
              ))}
            </div>
            <ClearWishList />
          </div>
        )}
      </WishListContext.Consumer>
    );
  }
}
