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
  /**
   * The class name of the element.
   * When the element has `className` set it can be styled by the parent
   * @see https://styled-components.com/docs/basics#styling-any-component
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  heading: HeadingsDefaultProps,
  children: null,
  className: null,
};

/**
 * Displays a `<nav>` component
 */
const Nav = (props) => {
  const { heading, children, className } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * When `className` is not specified it will become `Nav`
   */
  const className2 = className ? className : "Nav";

  return (
    <nav className={className2}>
      <Headings {...heading} />
      {children}
    </nav>
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
