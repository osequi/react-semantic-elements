import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("section")((props) => ({}));

/**
 * Displays the component
 */
const Docs = (props) => {
  return <Container className="Docs">Docs</Container>;
};

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
export { propTypes as DocsPropTypes, defaultProps as DocsDefaultProps };
