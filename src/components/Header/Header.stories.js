import React from "react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

/**
 * Should display nothing since `children` is not set
 */
export const Default = () => <Header />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Header children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);
