import React from "react";
import products from "../MockData/mock_products";
import { Link } from "react-router-dom";

export default class Pdp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 1
    };
    this.productData = this.props.location.state.productData;
    this.handleItemIncrement = this.handleItemIncrement.bind(this);
    this.handleItemDecrement = this.handleItemDecrement.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  handleItemIncrement() {
    this.setState(prevState => {
      return {
        itemCount: prevState.itemCount + 1
      };
    });
  }
  handleItemDecrement() {
    this.setState(prevState => {
      return {
        itemCount: prevState.itemCount - 1
      };
    });
  }
  addToCart() {
    console.log("Number of Items", this.state.itemCount);
  }
  render() {
    return (
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <Link to="/products">
              <button class="button is-primary is-rounded">
                Go To Product List
              </button>
            </Link>
          </div>
          <div class="tile is-child box">
            <div>
              <span class="tag is-info ">Name: </span>
              <span class="tag is-light">
                {this.productData.name.toUpperCase()}
              </span>
            </div>
            <div>
              <span class="tag is-info">Price: </span>
              <span class="tag is-light"> {this.productData.price} $</span>
            </div>
            <div>
              <span class="tag is-info">Is Available: </span>
              <span class="tag is-light">
                {this.productData.itemsInStock > 0 ? "YES" : "NO"}
              </span>
            </div>
            <br />

            <div>
              {this.productData.itemsInStock > 0 && (
                <div>
                  <div>
                    <button
                      class="button is-dark is-small"
                      onClick={this.handleItemIncrement}
                      disabled={
                        this.state.itemCount >= this.productData.itemsInStock
                      }
                    >
                      +
                    </button>
                    <span class="tag is-light">{this.state.itemCount}</span>
                    <button
                      class="button is-dark is-small"
                      onClick={this.handleItemDecrement}
                      disabled={this.state.itemCount === 1}
                    >
                      -
                    </button>
                  </div>
                  <br />
                  <div>
                    <button
                      class="button is-link is-rounded"
                      onClick={this.addToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <Link to="/wishlist">
                <button class="button is-link is-rounded">
                  Add To Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
