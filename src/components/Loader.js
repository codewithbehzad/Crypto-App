import React from "react";

// gif
import spinner from "../gif/loader.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="Loader" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
