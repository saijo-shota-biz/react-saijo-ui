import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState } from "@storybook/addons";
import RadioGroup from "./Radio";

export default {
  title: "Radio",
  component: RadioGroup,
  decorators: [withKnobs, withInfo],
};

export const radio = () => {
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
    ko: {
      label: "한국",
      checked: false,
    },
  });

  return (
    <>
      <div>
        {Object.entries(state).map(([key, value]) => (
          <div key={key}>{`${value.label} : ${value.checked.toString()}`}</div>
        ))}
      </div>
      <RadioGroup items={state} setItem={setState}></RadioGroup>
    </>
  );
};
