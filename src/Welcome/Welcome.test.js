import React from "react";
import { shallow } from "enzyme";
import Welcome from "./Welcome.js";

const wrapper = shallow(<Welcome name="DCP" />);

test("should have one h1 tag", () => {
  expect(wrapper.find("h1").length).toBe(1);
});

test("should render the right text", () => {
  expect(wrapper.find("h1").text()).toBe("Welcome to DCP!");
});

test("should render just 'Welcome to !' text when no props are passed", () => {
  const wrapper = shallow(<Welcome />);
  expect(wrapper.find("h1").text()).toBe("Welcome to !");
});
