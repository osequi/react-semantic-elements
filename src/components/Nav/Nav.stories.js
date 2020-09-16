import React from "react";
import Nav from "./Nav";

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
  <Nav children="Now it displays the children. Without title, by default. Please check the `HTML` tab on the right sidebar for the generated code." />
);

export const WithTitle = () => (
  <Nav children="Now it displays also the title" title="Title" display={true} />
);
