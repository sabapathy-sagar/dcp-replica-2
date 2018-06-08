import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.js";

const wrapper = shallow(<Header />);

test("should have one h2 tag", () => {
  expect(wrapper.find("h2").length).toBe(1);
});
