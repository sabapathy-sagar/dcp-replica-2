import React from "react";
import { LoginContext } from "../Context/LoginContext";

export default class RemoveFromWishList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoginContext.Consumer>
        {context =>
          context.isAuthenticated && (
            <div>
              <button>Remove From Wishlist</button>
            </div>
          )
        }
      </LoginContext.Consumer>
    );
  }
}
