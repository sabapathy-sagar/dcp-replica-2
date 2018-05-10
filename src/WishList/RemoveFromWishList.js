import React from "react";
import { LoginContext } from "../Context/LoginContext";

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
      <LoginContext.Consumer>
        {context =>
          context.isAuthenticated && (
            <div>
              <button onClick={this.handleClick}>Remove From Wishlist</button>
            </div>
          )
        }
      </LoginContext.Consumer>
    );
  }
}
