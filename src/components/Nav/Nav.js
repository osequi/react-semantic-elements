import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Nav = (props) => {
  const { title, display, children } = props;

  const displayAttribute = display ? null : "hidden";
  const titleElement = title ? (
    <TitleTag displayAttribute>{title}</TitleTag>
  ) : null;

  return (
    <nav>
      {titleElement}
      {children}
    </nav>
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
