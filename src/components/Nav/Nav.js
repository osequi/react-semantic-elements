import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The element title.
   * Usually it's not displayed on the UI but in the HTML code helping out the W3C .
   * @type {string}
   */
  title: PropTypes.string,
  /**
   * Display the element title?
   * Set to false by default
   * @type {bool}
   */
  displayTitle: PropTypes.bool,
  /**
   * The content of the element.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The title tag.
   * Set to `<h3>` by default
   * @type {element}
   */
  TitleTag: PropTypes.node,
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: null,
  displayTitle: false,
  children: null,
  TitleTag: "<h3>",
};

/**
 * Displays a `<nav>` component
 */
const Nav = (props) => {
  const { title, displayTitle, children, TitleTag } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * Displays the title tag if the `title` attribute is set
   */
  const titleElement = title ? <h3 hidden={!displayTitle}>{title}</h3> : null;

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
