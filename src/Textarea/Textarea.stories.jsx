import React from "react";
import Textarea from "./Textarea";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState } from "@storybook/addons";

export default {
  title: "Textarea",
  component: Textarea,
  decorators: [withKnobs, withInfo],
};

export const textarea = () => {
  const [value, setValue] = useState("");

  const label = text("Label", "label");
  const disabled = boolean("Disabled", false);
  const rows = number("Rows", 4);

  return (
    <Textarea
      label={label}
      value={value}
      rows={rows}
      disabled={disabled}
      onChange={(e) => setValue(e.target.value)}
    ></Textarea>
  );
};
