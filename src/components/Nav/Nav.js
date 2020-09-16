import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The heading of the element.
   * @type {HeadingsPropTypes}
   */
  heading: PropTypes.shape(HeadingsPropTypes),
  /**
   * The content of the element.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  heading: HeadingsDefaultProps,
  children: null,
};

/**
 * Displays a `<nav>` component
 */
const Nav = (props) => {
  const { heading, children } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  return (
    <nav>
      <Headings {...heading} />
      {children}
    </nav>
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
