import React from "react";
import products from "../MockData/mock_products";
import ShowProducts from "./ShowProducts";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: products,
      rangeSliderValue: 50
    };
    this.priceSort = this.priceSort.bind(this);
    this.nameSort = this.nameSort.bind(this);
    this.priceFilter = this.priceFilter.bind(this);
  }
  componentDidMount() {
    const initialProductList = products.filter(
      product => product.price <= this.state.rangeSliderValue
    );
    this.setState({
      productList: initialProductList
    });
  }
  priceSort() {
    const sortedByPriceProducts = products.sort(function(a, b) {
      return a.price - b.price;
    });
    this.setState({
      productList: sortedByPriceProducts
    });
  }
  priceFilter(e) {
    const filteredByPriceProducts = products.filter(
      product => product.price <= e.target.value
    );
    this.setState({
      productList: filteredByPriceProducts,
      rangeSliderValue: e.target.value
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
            <input
              id="sliderWithValue"
              class="slider has-output is-fullwidth is-info is-small"
              type="range"
              min="0"
              max="100"
              onChange={this.priceFilter}
              value={this.state.rangeSliderValue}
            />
            <output for="sliderWithValue">{this.state.rangeSliderValue}</output>
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
