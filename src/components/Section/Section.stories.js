import React from "react";
import Section from "./Section";

export default {
  title: "Components/Section",
  component: Section,
};

/**
 * Should display nothing since `children` is not set
 */
export const Default = () => <Section />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Section children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);
