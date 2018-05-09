import React from "react";
import RemoveFromWishList from "./RemoveFromWishList";

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
        Number of Products:{this.state.numberOfProductsInWishlist}
        <RemoveFromWishList onButtonClick={this.decreaseProductCount} />
      </div>
    );
  }
}
