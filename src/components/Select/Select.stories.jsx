import React from "react";
import Select from "./Select";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState } from "@storybook/addons";

export default {
  title: "Select",
  component: Select,
  decorators: [withKnobs, withInfo],
};

export const select = () => {
  const label = text("Label", "Select");

  const options = [
    {
      value: "",
      label: "",
    },
    {
      value: "1",
      label: "日本語",
    },
    {
      value: "2",
      label: "English",
    },
    {
      value: "3",
      label: "Le français",
    },
  ];

  const disabled = boolean("Disabled", false);

  const [selected, setSelected] = useState("");

  const onChange = (value) => {
    setSelected(value);
  };

  return (
    <Select
      selected={selected}
      options={options}
      disabled={disabled}
      onChange={onChange}
    >
      {label}
    </Select>
  );
};
