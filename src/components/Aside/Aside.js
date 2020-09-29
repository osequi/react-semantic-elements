import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import Elements, { ElementsPropTypes, ElementsDefaultProps } from "../Elements";

/**
 * Defines the prop types
 */
const propTypes = {
  ...ElementsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ElementsDefaultProps,
  type: "aside",
};

/**
 * Displays the component
 */
const Aside = (props) => {
  return <Elements {...props} />;
};

Aside.propTypes = propTypes;
Aside.defaultProps = defaultProps;

export default Aside;
export { propTypes as AsidePropTypes, defaultProps as AsideDefaultProps };
