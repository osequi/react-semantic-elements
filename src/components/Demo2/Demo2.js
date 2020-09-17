import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Imports other components and hooks
 */
import {
  Section,
  Article,
  Aside,
  Header,
  Footer,
  Nav,
  Headings,
} from "../ReactSemanticElements";

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
const Container = styled(Section)((props) => ({}));

/**
 * Styles the strapline
 */
const Strapline = styled(Headings)((props) => ({
  fontSize: "100%",
}));

/**
 * Styles the menu
 */
const Menu = styled(Nav)((props) => ({}));

/**
 * Styles the pagination
 */
const Pagination = styled(Nav)((props) => ({
  border: "1px solid",
}));

/**
 * Displays the component
 */
const Demo2 = (props) => {
  return (
    <Container
      className="Demo2"
      title="React Semantic Elements"
      heading={{ level: "h1" }}
    >
      <Strapline level="h2">
        HTML semantic sectioning elements for React.
      </Strapline>
      <Header>
        <Menu>Menu navigation inside a `nav`</Menu>
      </Header>
      <Article>
        <p>
          This is how this page is outlined in the{" "}
          <a href="https://validator.w3.org/" title="W3C validator">
            W3C validator.
          </a>
        </p>
        <p>
          <img src="/assets/images/outlined.png" alt="Outlined" />
        </p>
        <Aside>
          <p>Article meta information inside an `aside`</p>
        </Aside>
      </Article>
      <Pagination>Pagination inside a `nav`</Pagination>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};

Demo2.propTypes = propTypes;
Demo2.defaultProps = defaultProps;

export default Demo2;
export { propTypes as Demo2PropTypes, defaultProps as Demo2DefaultProps };
