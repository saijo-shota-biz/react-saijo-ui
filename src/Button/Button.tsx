import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export enum Color {
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

export enum Shape {
  ROUNDED = "Rounded",
  SQUARE = "Square",
  CIRCLE = "Circle",
}

export enum Icon {
  LEFT = "Left",
  RIGHT = "Right",
  ONLY = "Only",
}

export type ButtonProp = {
  color: Color;
  size: Size;
  shape: Shape;
  block: boolean;
  outline: boolean;
  icon: Icon;
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
};

const BASE_CLASSNAME = "el_button";

export const Button: React.FC<ButtonProp> = ({
  color,
  size,
  shape,
  block,
  outline,
  disabled,
  icon,
  children,
  onClick,
}) => {
  const classes = [
    BASE_CLASSNAME,
    `${BASE_CLASSNAME}__color${color}`,
    `${BASE_CLASSNAME}__size${size}`,
    shape ? `${BASE_CLASSNAME}__shape${shape}` : "",
    block ? `${BASE_CLASSNAME}__block` : "",
    outline ? `${BASE_CLASSNAME}__outline` : "",
    icon ? `${BASE_CLASSNAME}__icon${icon}` : "",
    disabled ? `${BASE_CLASSNAME}__disabled` : "",
  ].join(" ");

  return (
    <a className={classes} onClick={onClick}>
      {children}
    </a>
  );
};

Button.defaultProps = {
  color: Color.DEFAULT,
  size: Size.MEDIUM,
  shape: null,
  block: false,
  outline: false,
  disabled: false,
  icon: null,
  children: "",
  onClick: () => {},
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(Color).map((key) => Color[key])),
  size: PropTypes.oneOf(Object.keys(Size).map((key) => Size[key])),
  shape: PropTypes.oneOf(Object.keys(Shape).map((key) => Shape[key])),
  block: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon).map((key) => Icon[key])),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
