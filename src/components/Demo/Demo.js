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

const HeadingsStyled = styled(Headings)((props) => ({
  background: "red",
  color: "white",
}));

const HeadingsStyledAttrs = styled(Headings).attrs((props) => ({
  style: {
    background: "red",
    color: "white",
  },
}))`
  padding: 1em;
  border: 1px solid;
`;

const NavStyled = styled(Nav)`
  background: red;
  color: white;
`;

/**
 * Displays the component
 */
const Demo = (props) => {
  const { headings, nav } = props;

  return (
    <Container className="Demo">
      <Headings {...headings}>Demo</Headings>
      <HeadingsStyled>Headings styled</HeadingsStyled>
      <HeadingsStyledAttrs>Headings styled with attrs</HeadingsStyledAttrs>
      <Nav {...nav}>Simple nav</Nav>
      <NavStyled {...nav}>Styled nav</NavStyled>
    </Container>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
