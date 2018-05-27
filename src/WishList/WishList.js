import React from "react";
import { WishListContext } from "../Context/WishListContext";
import RemoveFromWishList from "./RemoveFromWishList";
import LoginAds from "../Login/LoginAds";
import WishListCount from "./WishListCount";

export default class WishList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginAds text="Log on to access more features" />
        <WishListCount />
        <RemoveFromWishList />
      </div>
    );
  }
}
