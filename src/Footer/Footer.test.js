import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.js";

const wrapper = shallow(<Footer />);

test("should have a h2 tag", () => {
  expect(wrapper.find("h2").length).toBe(1);
});
