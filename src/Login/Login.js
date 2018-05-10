import React from "react";

export default props => {
  return (
    <button class="button is-text has-text-link" onClick={props.authCb}>
      {props.isAuthenticated ? "Log Out" : "Log In"}
    </button>
  );
};
