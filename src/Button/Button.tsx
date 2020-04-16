import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export type ButtonProp = {
  color: ButtonColor;
  size: Size;
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
};

export enum ButtonColor {
  MAIN = "Main",
  DARK = "Dark",
  LIGHT = "Light",
  ACCENT = "Accent",
  DEFAULT = "Default",
}

export enum Size {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

const Button: React.FC<ButtonProp> = ({
  color,
  size,
  disabled,
  children,
  onClick,
}) => {
  const classes = [
    "el_btn",
    `el_btn__color${color}`,
    `el_btn__size${size}`,
    disabled ? "el_btn__disabled" : "",
  ].join(" ");

  return (
    <a className={classes} onClick={onClick}>
      {children}
    </a>
  );
};

Button.defaultProps = {
  color: ButtonColor.DEFAULT,
  size: Size.MEDIUM,
  disabled: false,
  children: "",
  onClick: () => {},
};

Button.propTypes = {
  color: PropTypes.oneOf(
    Object.keys(ButtonColor).map((key) => ButtonColor[key])
  ),
  size: PropTypes.oneOf(Object.keys(Size).map((key) => Size[key])),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
