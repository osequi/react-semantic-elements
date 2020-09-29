import React from "react";
import Elements from "./Elements";

export default {
  component: Elements,
  title: "Elements"
};

const Template = args => <Elements {...args} />;

export const Default = Template.bind({});
Default.args = {};
