import React from "react";

const withStorage = WrappedComponent => {
  class HOC extends React.Component {
    load = key => localStorage.getItem(key);

    save = (key, value) => localStorage.setItem(key, value);

    remove = key => localStorage.removeItem(key);

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
  return HOC;
};

export default withStorage;
