import React, { ReactNode } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

export type ModalProp = {
  open: boolean;
  onClose: () => void;
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
};

const Modal: React.FC<ModalProp> = ({
  open,
  onClose,
  header,
  body,
  footer,
}) => {
  return (
    <>
      {open && (
        <>
          <div className="bl_modal_overlay"></div>
          <div className="bl_modal">
            <div className="bl_modal_header">
              {header}
              {onClose && (
                <button className="bl_modal_header_closeBtn" onClick={onClose}>
                  <i className="material-icons">clear</i>
                </button>
              )}
            </div>
            {header && <hr />}
            <div className="bl_modal_body">{body}</div>
            {footer && <hr />}
            <div className="bl_modal_footer">{footer}</div>
          </div>
        </>
      )}
    </>
  );
};

Modal.defaultProps = {
  open: false,
  body: "",
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
