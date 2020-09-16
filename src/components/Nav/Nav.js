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
   * It can be overwritten by the `title` and `display` props.
   * It's useful to specify a custom heading tag like `h1`
   * @type {HeadingsPropTypes}
   */
  heading: PropTypes.shape(HeadingsPropTypes),
  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * It's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   * @type {string}
   */
  title: PropTypes.string,
  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   * @type {bool}
   */
  display: PropTypes.bool,
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
 * Defines the default props.
 */
const defaultProps = {
  heading: HeadingsDefaultProps,
  title: "Navigation",
  display: false,
  children: null,
  className: null,
};

/**
 * Displays a `<nav>` component.
 */
const Nav = (props) => {
  const { heading, title, display, children, className } = props;

  /**
   * Displays nothing if there is no `children` prop defined.
   */
  if (!children) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Nav`.
   */
  const className2 = className ? className : "Nav";

  /**
   * Overwrites the `heading` `children` and `display` props.
   */
  const heading2 = { ...heading, children: title, display: display };

  return (
    <nav className={className2}>
      <Headings {...heading2} />
      {children}
    </nav>
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
