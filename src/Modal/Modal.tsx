import React, { ReactNode } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

export type ModalProp = {
  open: boolean;
  onClose: () => void;
  header?: string;
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
              <div className="bl_modal_header_title">{header}</div>
              {onClose && (
                <button className="bl_modal_header_closeBtn" onClick={onClose}>
                  <i className="material-icons">clear</i>
                </button>
              )}
            </div>
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
  header: PropTypes.string,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
