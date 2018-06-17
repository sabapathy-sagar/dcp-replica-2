import React from "react";
import { mount } from "enzyme";
import Welcome from "./Welcome.js";

const wrapper = mount(<Welcome name="DCP" />);

test("should have one h1 tag", () => {
  expect(wrapper.find("h1").length).toBe(1);
});

test("should render the right text", () => {
  expect(wrapper.find("h1").text()).toBe("Welcome to DCP!");
});

test("should render just 'Welcome to !' text when no props are passed", () => {
  const wrapper = mount(<Welcome />);
  expect(wrapper.find("h1").text()).toBe("Welcome to !");
});
