import React, { ReactNode } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export type ButtonProp = {
  children: ReactNode;
};

const Button: React.FC<ButtonProp> = ({ children }) => {
  return <a className="el_btn">{children}</a>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
