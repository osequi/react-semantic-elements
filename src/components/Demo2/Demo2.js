import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import { Article } from "../ReactSemanticElements";

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
const Demo2 = (props) => {
  return (
    <Container className="Demo2">
      <Article title="Article">Article body</Article>
    </Container>
  );
};

Demo2.propTypes = propTypes;
Demo2.defaultProps = defaultProps;

export default Demo2;
export { propTypes as Demo2PropTypes, defaultProps as Demo2DefaultProps };
