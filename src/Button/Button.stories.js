import React from "react";
import Button, { ButtonColor, Size } from "./Button";
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
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={ButtonColor.DARK} onClick={action("clicked")}>
      Dark Color Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={ButtonColor.LIGHT} onClick={action("clicked")}>
      Light Color Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={ButtonColor.ACCENT} onClick={action("clicked")}>
      Accent Color Button
    </Button>
  </>
);

export const size = () => (
  <>
    <Button
      color={ButtonColor.MAIN}
      size={Size.SMALL}
      onClick={action("clicked")}
    >
      Small Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button
      color={ButtonColor.MAIN}
      size={Size.MEDIUM}
      onClick={action("clicked")}
    >
      Medium Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button
      color={ButtonColor.MAIN}
      size={Size.LARGE}
      onClick={action("clicked")}
    >
      Large Button
    </Button>
  </>
);
