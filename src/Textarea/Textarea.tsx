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

const Textarea: React.FC<TextareaProp> = ({
  label,
  value,
  rows,
  disabled,
  onChange,
}) => {
  const id = useMemo(() => Math.random().toString(32).substring(2), []);

  const [isFocus, setFocus] = useState(false);

  const onFocusHandler = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlurHandler = useCallback(() => {
    setFocus(false);
  }, []);

  const classNames = [
    "el_textarea",
    disabled ? "el_textarea__disabled" : "",
    isFocus ? "el_textarea__focused" : "",
  ].join(" ");

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={id} className="el_textarea_label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className="el_textarea_input"
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
