import React from "react";
import { LoginContext } from "../Context/LoginContext";

export default ({ text }) => {
  return (
    <LoginContext.Consumer>
      {context => !context.isAuthenticated && <p>{text}</p>}
    </LoginContext.Consumer>
  );
};
