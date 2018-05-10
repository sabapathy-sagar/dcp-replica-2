import React from "react";

export default props => {
  return (
    <button onClick={props.authCb}>
      {props.isAuthenticated ? "LogOut" : "Login"}
    </button>
  );
};
