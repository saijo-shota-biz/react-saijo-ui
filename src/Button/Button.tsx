import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

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

const Button: React.FC<ButtonProp> = ({
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
    "el_btn",
    `el_btn__color${color}`,
    `el_btn__size${size}`,
    shape ? `el_btn__shape${shape}` : "",
    block ? "el_btn__block" : "",
    outline ? "el_btn__outline" : "",
    icon ? `el_btn__icon${icon}` : "",
    disabled ? "el_btn__disabled" : "",
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
  block: false,
  outline: false,
  disabled: false,
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
