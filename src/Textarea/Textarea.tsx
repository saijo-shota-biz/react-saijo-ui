import React, { useState, useMemo, useCallback } from "react";
import "./Textarea.scss";
import PropTypes from "prop-types";

export type TextareaProp = {
  label: string;
  value: string;
  rows: number;
  disabled: boolean;
  onChange: () => void;
};

const BASE_CLASSNAME = "el_textarea";

const Textarea: React.FC<TextareaProp> = ({
  label,
  value,
  rows,
  disabled,
  onChange,
}) => {
  const id = useMemo(() => Math.random().toString(32).substring(2), []);

  const [focused, setFocused] = useState(false);
  const classnames = [
    BASE_CLASSNAME,
    disabled ? `${BASE_CLASSNAME}__disabled` : "",
    focused ? `${BASE_CLASSNAME}__focused` : "",
  ];

  const onFocusHandler = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <div className={classnames.join(" ")}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        value={value}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></textarea>
    </div>
  );
};

Textarea.defaultProps = {
  label: "",
  value: "",
  rows: 3,
  disabled: false,
  onChange: () => {},
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Textarea;
