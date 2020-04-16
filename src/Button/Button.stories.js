import React from "react";
import Button, { Color, Size, Shape } from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

export const base = () => (
  <Button onClick={action("clicked")}>Base Button</Button>
);

export const disabled = () => (
  <Button disabled onClick={action("clicked")}>
    Disabled Button
  </Button>
);

export const colored = () => (
  <>
    <Button color={Color.MAIN} onClick={action("clicked")}>
      Main Color Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.DARK} onClick={action("clicked")}>
      Dark Color Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.LIGHT} onClick={action("clicked")}>
      Light Color Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.ACCENT} onClick={action("clicked")}>
      Accent Color Button
    </Button>
  </>
);

export const size = () => (
  <>
    <Button color={Color.MAIN} size={Size.SMALL} onClick={action("clicked")}>
      Small Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.MAIN} size={Size.MEDIUM} onClick={action("clicked")}>
      Medium Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.MAIN} size={Size.LARGE} onClick={action("clicked")}>
      Large Button
    </Button>
  </>
);

export const shape = () => (
  <>
    <Button
      color={Color.MAIN}
      size={Size.SMALL}
      shape={Shape.ROUNDED}
      onClick={action("clicked")}
    >
      Rounded Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button
      color={Color.MAIN}
      size={Size.MEDIUM}
      shape={Shape.SQUARE}
      onClick={action("clicked")}
    >
      Square Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button
      color={Color.MAIN}
      size={Size.LARGE}
      shape={Shape.CIRCLE}
      onClick={action("clicked")}
    >
      Circle Button
    </Button>
  </>
);

export const block = () => (
  <Button block onClick={action("clicked")}>
    Block Button
  </Button>
);

export const outline = () => (
  <>
    <Button color={Color.DEFAULT} outline onClick={action("clicked")}>
      Default Outline Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.MAIN} outline onClick={action("clicked")}>
      Main Outline Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.DARK} outline onClick={action("clicked")}>
      Dark Outline Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.LIGHT} outline onClick={action("clicked")}>
      Light Outline Button
    </Button>
    <diiv style={{ margin: "10px" }}></diiv>
    <Button color={Color.ACCENT} outline onClick={action("clicked")}>
      Accent Outline Button
    </Button>
  </>
);
