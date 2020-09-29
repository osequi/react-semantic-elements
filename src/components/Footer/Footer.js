import React from "react";
import PropTypes from "prop-types";

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
  type: "footer",
  display: "false",
};

/**
 * Displays a `<footer>` element.
 */
const Footer = (props) => {
  return <Elements {...props} />;
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
export { propTypes as FooterPropTypes, defaultProps as FooterDefaultProps };
