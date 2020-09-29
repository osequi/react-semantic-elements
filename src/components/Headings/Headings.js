import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The level of the element.
   * @type {string}
   */
  level: PropTypes.string,
  /**
   * Display the element?
   * @type {bool}
   */
  display: PropTypes.bool,
  /**
   * The children of the element.
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
  level: "h3",
  display: true,
  children: null,
  className: null,
};

/**
 * Displays the <h1>..<h6> elements
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */

const Headings = (props) => {
  const { level, display, children, className } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * Hides the element when display is `false`
   * `<h3 hidden>` can't be used because it can be overwritten in css.
   * See https://css-tricks.com/the-hidden-attribute-is-visibly-weak/
   *
   * In the parent this `display: none` property cannot be overwritten. See Demo.js for example
   */
  const style = display ? null : { display: "none" };

  /**
   * When `className` is not specified it will take the value of `level`
   */
  const className2 = className ? className : level;

  let heading = "";

  switch (level) {
    case "h1":
      heading = (
        <h1 className={className2} style={style}>
          {children}
        </h1>
      );
      break;
    case "h2":
      heading = (
        <h2 className={className2} style={style}>
          {children}
        </h2>
      );
      break;
    case "h3":
      heading = (
        <h3 className={className2} style={style}>
          {children}
        </h3>
      );
      break;
    case "h4":
      heading = (
        <h4 className={className2} style={style}>
          {children}
        </h4>
      );
      break;
    case "h5":
      heading = (
        <h5 className={className2} style={style}>
          {children}
        </h5>
      );
    case "h6":
    default:
      heading = (
        <h6 className={className2} style={style}>
          {children}
        </h6>
      );
  }

  return heading;
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;

export default Headings;
export { propTypes as HeadingsPropTypes, defaultProps as HeadingsDefaultProps };
