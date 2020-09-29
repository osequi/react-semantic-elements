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
  type: "header",
  display: false,
  // NOTE: to make this work children is set to non-null: `<Header title="Demo" display={true} />`
  children: "",
};

/**
 * Displays a `<header>` element.
 */
const Header = (props) => {
  return <Elements {...props} />;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
