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
   * The title heading tag level.
   * Set to `<h3>` by default
   * @type {element}
   */
  titleHeadingLevel: PropTypes.string,
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
  title: null,
  displayTitle: false,
  titleHeadingLevel: "h3",
  children: null,
};

const Heading = (props) => {
  const { hidden, children } = props;
  return (
    <header>
      <h3 hidden={hidden}>{children}</h3>
    </header>
  );
};

/**
 * Displays a `<nav>` component
 */
const Nav = (props) => {
  const { title, displayTitle, children, titleHeadingLevel } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * Displays the title tag if the `title` attribute is set
   */
  const titleElement = title ? (
    <Heading level={titleHeadingLevel} hidden={!displayTitle}>
      {title}
    </Heading>
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
