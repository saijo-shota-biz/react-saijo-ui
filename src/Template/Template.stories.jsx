import React from "react";
import Template from "./Template";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Template",
  component: Template,
  decorators: [withKnobs, withInfo],
};

export const template = () => <Template></Template>;
