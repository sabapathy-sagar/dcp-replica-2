import React from "react";
import Welcome from "../Welcome/Welcome";
import LoginAds from "../Login/LoginAds";
import { Link } from "react-router-dom";

export default () => (
  <div class="hero-body has-background-grey-lighter">
    <div class="container has-text-centered">
      <div class="title">
        <Welcome name="DCP" />
      </div>
      <h2 class="subtitle">
        Take a look at our products:{" "}
        <Link to="/products">
          <button class="button is-primary is-rounded">Go To Products</button>
        </Link>
        <LoginAds text="Log on to our website and get exclusive discounts" />
      </h2>
    </div>
  </div>
);
