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
      <p>
        By following the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines"
          title="MDN"
        >
          MDN guidelines.
        </a>
      </p>
      <Header>
        <Menu title="Menu">Menu navigation inside a `nav`</Menu>
      </Header>
      <Article>
        <p>This is how this page is outlined in the W3C Validator.</p>
        <p>
          <img src="/assets/images/outlined.png" alt="Outlined" />
        </p>
        <p>
          You can check it live by yourself at{" "}
          <a
            href="https://validator.w3.org/nu/?showoutline=yes&doc=https%3A%2F%2Freact-semantic-elements.vercel.app%2F"
            title="W3C validator"
          >
            the W3C validator for this page.
          </a>
        </p>
        <Aside>
          <p>Article meta information inside an `aside`</p>
        </Aside>
      </Article>
      <Pagination title="Pagination">Pagination inside a `nav`</Pagination>
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
