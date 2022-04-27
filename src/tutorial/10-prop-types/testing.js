import React from "react";
import PropTypes from "prop-types";

function testing(props) {
  return <div>testing</div>;
}

testing.propTypes = {
  name: PropTypes.array.isRequired, //shortcut ptar
  text: PropTypes.string, // shortcut pts
};

export default testing;

// shortcut rcfp to create react function with prototype
