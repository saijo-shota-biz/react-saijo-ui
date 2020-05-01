import React, { useState, useMemo, useCallback } from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

export type TextInputProp = {
  label?: string;
  value: string;
  disabled: boolean;
  onChange: () => void;
};

const BASE_CLASSNAME = "el_textInput";

const TextInput: React.FC<TextInputProp> = ({
  label,
  value,
  disabled,
  onChange,
}) => {
  const id = useMemo(() => Math.random().toString(32).substring(2), []);

  const [focused, setFocused] = useState(false);
  const classname = [
    BASE_CLASSNAME,
    disabled ? `${BASE_CLASSNAME}__disabled` : "",
    focused ? `${BASE_CLASSNAME}__focused` : "",
  ].join(" ");

  const onFocusHandler = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <div className={classname}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
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
