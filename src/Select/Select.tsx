import React, { ReactNode, useMemo, useRef } from "react";
import "./Select.scss";
import PropTypes from "prop-types";

export type Option = {
  value: string;
  label: string;
};

export type SelectProp = {
  options: Option[];
  selected: string;
  disabled: boolean;
  children: ReactNode;
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProp> = ({
  options,
  selected,
  disabled,
  children,
  onChange,
}) => {
  const id = useMemo(() => Math.random().toString(32).substring(2), []);
  const name = useMemo(() => Math.random().toString(32).substring(2), []);

  const selectInputRef = useRef(null);

  const onChangeHandler = (e) => {
    onChange(e.target.value);
    selectInputRef.current.blur();
  };

  return (
    <div className="el_select">
      <label className="el_select_label" htmlFor={id}>
        {children}
      </label>
      <div
        tabIndex={!disabled && 0}
        className="el_select_input"
        ref={selectInputRef}
      >
        <div
          className={`el_select_input_value ${
            disabled && "el_select_input_value__disabled"
          }`}
        >
          {options.find((option) => option.value === selected).label}
        </div>
        <div className="el_select_input_option">
          {options.map((option) => (
            <div key={option.value} className="el_select_input_option_item">
              <input
                id={`${id}${option.value}`}
                className="el_select_input_option_item_input"
                type="radio"
                name={name}
                value={option.value}
                checked={option.value === selected}
                onChange={onChangeHandler}
              />
              <label
                className="el_select_input_option_item_label"
                htmlFor={`${id}${option.value}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  options: [],
  selected: "",
  disabled: false,
  children: "",
  onChange: () => {},
};

Select.propTypes = {
  options: PropTypes.arrayOf<Option>(
    PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })
  ),
  selected: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

export default Select;
