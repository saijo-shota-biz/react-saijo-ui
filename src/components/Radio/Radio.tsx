import React, { useMemo, ReactNode, useCallback } from "react";
import "./Radio.scss";
import PropTypes from "prop-types";

type RadioProp = {
  groupName: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  children: ReactNode;
  onChange: (value: string) => void;
};

const Radio: React.FC<RadioProp> = ({
  groupName,
  value,
  checked,
  disabled = false,
  children,
  onChange,
}) => {
  const id = useMemo(() => Math.random().toString(32).substring(2), []);
  const onClickHandler = useCallback(() => {
    onChange(value);
  }, []);

  return (
    <div className="el_radio">
      <input
        id={id}
        className="el_radio_input"
        type="radio"
        name={groupName}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onClickHandler}
      />
      <label htmlFor={id} className="el_radio_label">
        {children}
      </label>
    </div>
  );
};

Radio.propTypes = {
  groupName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

export type Item = {
  [key: string]: {
    label: string;
    checked: boolean;
    disabled?: boolean;
  };
};

export type RadioGroupProp = {
  items: Item;
  setItem: (item: Item) => void;
};

const RadioGroup: React.FC<RadioGroupProp> = ({ items, setItem }) => {
  const name = useMemo(() => Math.random().toString(32).substring(2), []);

  const onChangeHandler = useCallback((selectedKey) => {
    const newItem: Item = Object.entries(items).reduce((p, [key, value]) => {
      p[key] = { ...value, checked: key === selectedKey };
      return p;
    }, {});
    setItem(newItem);
  }, []);

  return (
    <div className="bl_radio_group">
      {Object.entries(items).map(([key, value]) => (
        <Radio
          key={key}
          groupName={name}
          value={key}
          checked={value.checked}
          disabled={value.disabled}
          onChange={onChangeHandler}
        >
          {value.label}
        </Radio>
      ))}
    </div>
  );
};

RadioGroup.defaultProps = {
  items: {},
  setItem: () => {},
};

RadioGroup.propTypes = {
  items: PropTypes.shape({
    key: PropTypes.exact({
      label: PropTypes.string,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
    }),
  }),
  setItem: PropTypes.func,
};

export default RadioGroup;
