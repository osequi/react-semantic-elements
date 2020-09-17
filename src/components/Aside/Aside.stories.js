import React from "react";
import Aside from "./Aside";

export default {
  title: "Components/Aside",
  component: Aside,
};

/**
 * Should display nothing since `children` is not set
 */
export const Default = () => <Aside />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Aside children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);
