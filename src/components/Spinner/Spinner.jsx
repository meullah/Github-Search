import React, { Fragment } from "react";
import _spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={_spinner}
        alt="loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
