import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState } from "@storybook/addons";
import CheckboxGroup from "./Checkbox";

export default {
  title: "Checkbox",
  component: CheckboxGroup,
  decorators: [withKnobs, withInfo],
};

export const checkbox = () => {
  const [state, setState] = useState({
    ja: {
      label: "日本語",
      checked: false,
    },
    en: {
      label: "English",
      checked: false,
      disabled: true,
    },
    fr: {
      label: "Le français",
      checked: true,
      disabled: true,
    },
  });

  return (
    <>
      <div>
        {Object.entries(state).map(([key, value]) => (
          <div key={key}>{`${value.label} : ${value.checked.toString()}`}</div>
        ))}
      </div>
      <CheckboxGroup items={state} setItem={setState}></CheckboxGroup>
    </>
  );
};
