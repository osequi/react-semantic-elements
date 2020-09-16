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
  <Nav children="Please check the `HTML` tab on the right sidebar for the generated code." />
);

export const WithTitle = () => (
  <Nav children="children" title="Title" display={true} />
);

export const WithTitleHidden = () => <Nav children="children" title="Title" />;

export const WithCustomTitleTag = () => (
  <Nav children="children" heading={{ children: "title", level: "h1" }} />
);

export const WithCustomClassname = () => (
  <Nav children="children" className="Classname" />
);

export const WithHeading = () => (
  <Nav children="children" heading={{ children: "title", level: "h1" }} />
);
