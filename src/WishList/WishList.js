import React from "react";
import RemoveFromWishList from "./RemoveFromWishList";
import LoginAds from "../Login/LoginAds";

export default class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfProductsInWishlist: 10
    };
    this.decreaseProductCount = this.decreaseProductCount.bind(this);
  }
  decreaseProductCount() {
    this.setState(prevState => ({
      numberOfProductsInWishlist: prevState.numberOfProductsInWishlist - 1
    }));
  }

  render() {
    return (
      <div>
        <LoginAds text="Log on to access more features" />
        Number of Products:{this.state.numberOfProductsInWishlist}
        <RemoveFromWishList onButtonClick={this.decreaseProductCount} />
      </div>
    );
  }
}
