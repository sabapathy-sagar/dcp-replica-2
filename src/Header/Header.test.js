import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.js";

const wrapper = shallow(<Header />);

test("should have WishListCount component", () => {
  expect(wrapper.find("WishListCount").length).toBe(1);
});
