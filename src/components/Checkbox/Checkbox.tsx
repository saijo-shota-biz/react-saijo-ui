import React, { useMemo, ReactNode, useCallback } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";
import uniqueId from "../../util/uniqueId";

type CheckboxProp = {
  groupName: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  children: ReactNode;
  onChange: (value: string) => void;
};

const Checkbox: React.FC<CheckboxProp> = ({
  groupName,
  value,
  checked,
  disabled = false,
  children,
  onChange,
}) => {
  const id = useMemo(() => uniqueId(), []);
  const onClickHandler = useCallback(() => {
    onChange(value);
  }, []);

  return (
    <div className="el_checkbox">
      <input
        id={id}
        className="el_checkbox_input"
        type="checkbox"
        name={groupName}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onClickHandler}
      />
      <label htmlFor={id} className="el_checkbox_label">
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
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

export type CheckboxGroupProp = {
  items: Item;
  setItem: (item: Item) => void;
};

const CheckboxGroup: React.FC<CheckboxGroupProp> = ({ items, setItem }) => {
  const name = useMemo(() => uniqueId(), []);

  const onChangeHandler = useCallback((value) => {
    const newItem = items[value];
    newItem.checked = !newItem.checked;
    setItem({ ...items, [value]: newItem });
  }, []);

  return (
    <div className="bl_checkbox_group">
      {Object.entries(items).map(([key, value]) => (
        <Checkbox
          key={key}
          groupName={name}
          value={key}
          checked={value.checked}
          disabled={value.disabled}
          onChange={onChangeHandler}
        >
          {value.label}
        </Checkbox>
      ))}
    </div>
  );
};

CheckboxGroup.defaultProps = {
  items: {},
  setItem: () => {},
};

CheckboxGroup.propTypes = {
  items: PropTypes.shape({
    key: PropTypes.exact({
      label: PropTypes.string,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
    }),
  }),
  setItem: PropTypes.func,
};

export default CheckboxGroup;
