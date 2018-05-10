import React from "react";
import products from "../MockData/mock_products";
import ShowProducts from "./ShowProducts";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: products
    };
    this.priceSort = this.priceSort.bind(this);
    this.nameSort = this.nameSort.bind(this);
  }
  priceSort() {
    const sortedByPriceProducts = products.sort(function(a, b) {
      return a.price - b.price;
    });
    this.setState({
      productList: sortedByPriceProducts
    });
  }
  nameSort() {
    const sortedByNameProducts = products.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({
      productList: sortedByNameProducts
    });
  }

  render() {
    return (
      <div class="menu">
        <h1 class="menu-label has-text-black has-background-primary">
          Here are a list of products for you!!
        </h1>
        <div />
        <div class="columns is-mobile is-gapless">
          <div class="column">
            <button
              class="button is-info is-outlined is-small"
              onClick={this.priceSort}
            >
              Sort by Price
            </button>
          </div>
          <div class="column">
            <button
              class="button is-info is-outlined is-small"
              onClick={this.nameSort}
            >
              Sort by Name
            </button>
          </div>
        </div>
        <ShowProducts products={this.state.productList} />
      </div>
    );
  }
}
