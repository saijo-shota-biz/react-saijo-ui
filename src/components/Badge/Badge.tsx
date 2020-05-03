import React, { ReactNode } from "react";
import "./Badge.scss";
import PropTypes from "prop-types";
import { Color } from "../../enum/Color";
import classnames from "../../util/classname";

export type BadgeProp = {
  color: Color;
  rounded: boolean;
  outlined: boolean;
  children: ReactNode;
};

const BASE_CLASSNAME = "el_badge";

const Badge: React.FC<BadgeProp> = ({ color, rounded, outlined, children }) => {
  const classname = classnames([
    [BASE_CLASSNAME],
    [`${BASE_CLASSNAME}__color${color}`, !!color],
    [`${BASE_CLASSNAME}__rounded`, rounded],
    [`${BASE_CLASSNAME}__outlined`, outlined],
  ]);

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
