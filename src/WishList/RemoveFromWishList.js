import React from "react";

export default class RemoveFromWishList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onButtonClick();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Remove From Wishlist</button>
      </div>
    );
  }
}
