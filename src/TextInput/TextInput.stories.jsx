import React from "react";
import TextInput from "./TextInput";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState } from "@storybook/addons";

export default {
  title: "TextInput",
  component: TextInput,
  decorators: [withKnobs, withInfo],
};

export const textinput = () => {
  const label = text("Label", "text", "textInput");
  const [value, setValue] = useState();
  const disabled = boolean("Disabled", false, "textInput");
  return (
    <div style={{ width: "300px" }}>
      <TextInput
        label={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={disabled}
      ></TextInput>
    </div>
  );
};
