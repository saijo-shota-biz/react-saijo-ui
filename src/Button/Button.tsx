import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export type ButtonProp = {
  color: Color;
  size: Size;
  shape: Shape;
  block: boolean;
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

const Button: React.FC<ButtonProp> = ({
  color,
  size,
  shape,
  block,
  disabled,
  children,
  onClick,
}) => {
  const classes = [
    "el_btn",
    `el_btn__color${color}`,
    `el_btn__size${size}`,
    shape ? `el_btn__shape${shape}` : "",
    block ? "el_btn__block" : "",
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
  disabled: false,
  block: false,
  children: "",
  onClick: () => {},
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(Color).map((key) => Color[key])),
  size: PropTypes.oneOf(Object.keys(Size).map((key) => Size[key])),
  shape: PropTypes.oneOf(Object.keys(Shape).map((key) => Shape[key])),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
