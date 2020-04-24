import React from "react";
import Button, { Color, Size, Shape, Icon } from "./Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs, withInfo],
};

const getProps = (groupId) => {
  const color = select(
    "Color",
    Object.keys(Color).reduce((p, c) => {
      p[c] = Color[c];
      return p;
    }, {}),
    Color.DEFAULT,
    groupId
  );

  const size = select(
    "Size",
    Object.keys(Size).reduce((p, c) => {
      p[c] = Size[c];
      return p;
    }, {}),
    Size.MEDIUM,
    groupId
  );

  const shape = select(
    "Shape",
    Object.keys(Shape).reduce(
      (p, c) => {
        p[c] = Shape[c];
        return p;
      },
      { None: null }
    ),
    null,
    groupId
  );

  const icon = select(
    "Icon",
    Object.keys(Icon).reduce(
      (p, c) => {
        p[c] = Icon[c];
        return p;
      },
      { None: null }
    ),
    null,
    groupId
  );

  return {
    color,
    size,
    shape,
    icon,
    block: boolean("Block", false, groupId),
    outline: boolean("Outline", false, groupId),
    disabled: boolean("Disabled", false, groupId),
  };
};

export const label = () => {
  const groupId = "Label";

  const props = getProps(groupId);

  return (
    <Button {...props} onClick={action("clicked")}>
      {text("Label", "Button", groupId)}
    </Button>
  );
};

export const icon = () => {
  const groupId = "Icon";

  const props = getProps(groupId);

  return (
    <Button {...props} onClick={action("clicked")}>
      <i className="material-icons">android</i>
      {text("Label", "", groupId)}
    </Button>
  );
};
