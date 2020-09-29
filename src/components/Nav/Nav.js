import React from "react";
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
  type: "nav",
};

/**
 * Displays a `<nav>` element.
 */
const Nav = (props) => {
  return <Elements {...props} />;
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
