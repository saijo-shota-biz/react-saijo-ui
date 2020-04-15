import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export type ButtonProp = {
  color: ButtonColor;
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

const Button: React.FC<ButtonProp> = ({
  color,
  disabled,
  children,
  onClick,
}) => {
  const classes = [
    "el_btn",
    `el_btn__color${color}`,
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
  disabled: false,
  children: "",
  onClick: () => {},
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(ButtonColor).map((e) => ButtonColor[e])),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
