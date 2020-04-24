import React from "react";
import Button, { Color, Size, Shape, Icon } from "./Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const label = () => {
  const groupId = "Label";
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

  const props = {
    color,
    size,
    shape,
    block: boolean("Block", false, groupId),
    outline: boolean("Outline", false, groupId),
    disabled: boolean("Disabled", false, groupId),
    children: text("Label", "Button", groupId),
  };

  return <Button {...props} onClick={action("clicked")}></Button>;
};

export const icon = () => {
  const groupId = "Icon";
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
    Object.keys(Icon).reduce((p, c) => {
      p[c] = Icon[c];
      return p;
    }, {}),
    Icon.ONLY,
    groupId
  );

  const props = {
    color,
    size,
    shape,
    icon,
    block: boolean("Block", false, groupId),
    outline: boolean("Outline", false, groupId),
    disabled: boolean("Disabled", false, groupId),
  };

  const children = text("Label", "", groupId);

  return (
    <Button {...props} onClick={action("clicked")}>
      <i className="material-icons">android</i>
      {children}
    </Button>
  );
};
