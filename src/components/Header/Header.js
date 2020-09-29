import React from "react";
/**
 * Imports other components and hooks
 */
import SemanticElements, { SemanticElementsPropTypes, SemanticElementsDefaultProps } from "../SemanticElements";

/**
 * Defines the prop types
 */
const propTypes = {
  ...SemanticElementsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SemanticElementsDefaultProps,
  type: "header",
  display: false,
  // NOTE: to make this work children is set to non-null: `<Header title="Demo" display={true} />`
  children: "",
};

/**
 * Displays a `<header>` element.
 */
const Header = (props) => {
  return <SemanticElements {...props} />;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
