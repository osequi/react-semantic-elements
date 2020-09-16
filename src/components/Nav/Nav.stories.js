import React from "react";

import Nav from "./Nav";
import description from "./Nav.md";

export default {
  title: "Components/Nav",
  component: Nav,
};

/**
 * Should display nothing since `children` is not set
 */
export const Default = () => <Nav />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Nav children="Please check the `HTML` tab on the right sidebar for the generated code." />
);

export const WithTitle = () => (
  <Nav children="children" heading={{ children: "title" }} />
);

export const WithTitleHidden = () => (
  <Nav children="children" heading={{ children: "title", display: false }} />
);

export const WithCustomTitleTag = () => (
  <Nav children="children" heading={{ children: "title", level: "h1" }} />
);
