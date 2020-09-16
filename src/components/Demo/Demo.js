import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";
import Nav, { NavPropTypes, NavDefaultProps } from "../Nav";

/**
 * Defines the prop types
 */
const propTypes = {
  headings: PropTypes.shape(HeadingsPropTypes),
  nav: PropTypes.shape(NavPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  headings: HeadingsDefaultProps,
  nav: NavDefaultProps,
};

/**
 * Styles the component container
 */
const Container = styled("section")((props) => ({}));

/**
 * Displays the component
 */
const Demo = (props) => {
  const { headings, nav } = props;

  return (
    <Container className="Demo">
      <Headings {...headings}>Demo</Headings>
      <Nav {...nav}>Demo nav</Nav>
    </Container>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
