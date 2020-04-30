import React from "react";
import Message, { Color } from "./Message";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Message",
  component: Message,
  decorators: [withKnobs, withInfo],
};

export const message = () => {
  const color = select(
    "Color",
    Object.keys(Color).reduce((p, c) => {
      p[c] = Color[c];
      return p;
    }, {}),
    Color.DEFAULT
  );

  const rounded = boolean("Rounded", false);

  return (
    <Message color={color} rounded={rounded}>
      Warning! このメッセージは右側ので閉じることができます。
    </Message>
  );
};
