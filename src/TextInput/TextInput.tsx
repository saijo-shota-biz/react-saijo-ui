import React, { useState } from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

export type TextInputProp = {
  label?: string;
  value: string;
  disabled: boolean;
  onChange: () => void;
};

const TextInput: React.FC<TextInputProp> = ({
  label,
  value,
  disabled,
  onChange,
}) => {
  const id = Math.random().toString(32).substring(2);

  const [isFocus, setFocus] = useState(false);

  const onFocusHandler = () => {
    setFocus(true);
  };
  const onBlurHandler = () => {
    setFocus(false);
  };

  const classNames = [
    "el_textInput",
    disabled ? "el_textInput__disabled" : "",
    isFocus ? "el_textInput__focused" : "",
  ].join(" ");

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={id} className="el_textInput_label">
          {label}
        </label>
      )}
      <input
        id={id}
        className="el_textInput_input"
        type="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

TextInput.defaultProps = {
  label: "",
  value: "",
  disabled: false,
  onChange: () => {},
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TextInput;
