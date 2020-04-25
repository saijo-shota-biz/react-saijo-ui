import React from "react";
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
  const classes = [
    "el_textInput",
    disabled ? "el_textInput__disabled" : "",
  ].join(" ");
  return (
    <div className={classes}>
      {label && <label className="el_textInput_label">{label}</label>}
      <input
        className="el_textInput_input"
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
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
