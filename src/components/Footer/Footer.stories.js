import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

/**
 * Should display nothing since `children` is not set
 */
export const Default = () => <Footer />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Footer children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);
