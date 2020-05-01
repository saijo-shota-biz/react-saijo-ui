import React from "react";
import Badge, { Color } from "./Badge";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Badge",
  component: Badge,
  decorators: [withKnobs, withInfo],
};

export const badge = () => {
  const label = text("Label", "バッジ");

  const color = select(
    "Color",
    Object.keys(Color).reduce((p, c) => {
      p[c] = Color[c];
      return p;
    }, {}),
    Color.DEFAULT
  );

  const rounded = boolean("Rounded", false);

  const outlined = boolean("Outlined", false);

  return (
    <Badge color={color} rounded={rounded} outlined={outlined}>
      {label}
    </Badge>
  );
};
