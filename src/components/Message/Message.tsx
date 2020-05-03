import React, { useState, useCallback, ReactNode } from "react";
import "./Message.scss";
import PropTypes from "prop-types";
import { Color } from "../../enum/Color";
import classnames from "../../util/classname";

export type MessageProp = {
  color?: Color;
  rounded?: boolean;
  children: ReactNode;
};

const BASE_CLASSNAME = "el_message";

const Message: React.FC<MessageProp> = ({ color, rounded, children }) => {
  const classname = classnames([
    [BASE_CLASSNAME],
    [`${BASE_CLASSNAME}__color${color}`, !!color],
    [`${BASE_CLASSNAME}__rounded`, rounded],
  ]);

  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {open && (
        <div className={classname}>
          {children}
          <button className="el_message_closeBtn" onClick={onClose}>
            <i className="material-icons">clear</i>
          </button>
        </div>
      )}
    </>
  );
};

Message.defaultProps = {
  color: Color.DEFAULT,
  rounded: false,
  children: "",
};

Message.propTypes = {
  color: PropTypes.oneOf(Object.keys(Color).map((key) => Color[key])),
  rounded: PropTypes.bool,
  children: PropTypes.node,
};

export default Message;
