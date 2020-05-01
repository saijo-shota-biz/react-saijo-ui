import React, { ReactNode } from "react";
import "./Badge.scss";
import PropTypes from "prop-types";
import { Color } from "../../enum/Color";

export type BadgeProp = {
  color: Color;
  rounded: boolean;
  outlined: boolean;
  children: ReactNode;
};

const Badge: React.FC<BadgeProp> = ({ color, rounded, outlined, children }) => {
  const classname = [
    "el_badge",
    `el_badge__color${color}`,
    rounded ? "el_badge__rounded" : "",
    outlined ? "el_badge__outlined" : "",
  ].join(" ");

  return <a className={classname}>{children}</a>;
};

Badge.defaultProps = {
  color: Color.DEFAULT,
  rounded: false,
  outlined: false,
  children: "",
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.keys(Color).map((c) => Color[c])),
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Badge;
