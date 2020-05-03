import React, { useState, useMemo, useCallback } from "react";
import "./Textarea.scss";
import PropTypes from "prop-types";
import uniqueId from "../../util/uniqueId";
import classnames from "../../util/classname";

export type TextareaProp = {
  label?: string;
  value: string;
  rows?: number;
  disabled?: boolean;
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
  const id = useMemo(() => uniqueId(), []);

  const [focused, setFocused] = useState(false);

  const classname = classnames([
    [BASE_CLASSNAME],
    [`${BASE_CLASSNAME}__disabled`, disabled],
    [`${BASE_CLASSNAME}__focused`, focused],
  ]);

  const onFocusHandler = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <div className={classname}>
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
