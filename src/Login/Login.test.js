import React from "react";
import { mount } from "enzyme";
import Login from "./Login.js";

const wrapper = mount(<Login />);

test("should have a button", () => {
  expect(wrapper.find("button").length).toBe(1);
});
