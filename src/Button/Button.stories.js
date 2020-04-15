import React from "react";
import Button, { ButtonColor } from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

export const base = () => (
  <Button onClick={action("clicked")}>Base Button</Button>
);

export const base_disabled = () => (
  <Button disabled onClick={action("clicked")}>
    Disabled Button
  </Button>
);

export const colored = () => (
  <>
    <Button color={ButtonColor.MAIN} onClick={action("clicked")}>
      Main Color Button
    </Button>
    <Button color={ButtonColor.DARK} onClick={action("clicked")}>
      Dark Color Button
    </Button>
    <Button color={ButtonColor.LIGHT} onClick={action("clicked")}>
      Light Color Button
    </Button>
    <Button color={ButtonColor.ACCENT} onClick={action("clicked")}>
      Accent Color Button
    </Button>
  </>
);
