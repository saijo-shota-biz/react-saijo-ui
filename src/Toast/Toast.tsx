import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./Toast.scss";
import PropTypes from "prop-types";

export enum Color {
  MAIN = "Main",
  DARK = "Dark",
  LIGHT = "Light",
  ACCENT = "Accent",
  DEFAULT = "Default",
}

export type ToastProp = {
  id: string;
  color: Color;
  time: number;
  message: string;
  onClose: (id: string) => void;
};

export const Toast: React.FC<ToastProp> = ({
  id,
  color,
  time,
  message,
  onClose,
}) => {
  const classname = ["el_toast", `el_toast__color${color}`].join(" ");

  setTimeout(() => {
    onClose(id);
  }, time);

  return (
    <div className={classname}>
      {message}
      <button className="el_toast_closeBtn" onClick={() => onClose(id)}>
        <i className="material-icons">clear</i>
      </button>
    </div>
  );
};

Toast.defaultProps = {
  id: "",
  color: Color.DEFAULT,
  time: 3000,
  message: "",
  onClose: () => {},
};

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(Color).map((key) => Color[key])),
  time: PropTypes.number,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export type ToastDetail = {
  color: Color;
  message: string;
  time: number;
};

export enum Position {
  TOP = "Top",
  BOTTOM = "Bottom",
}

export type ToastContainerProp = {
  position: Position;
  onClose?: () => void;
};

const ToastContainer: React.FC<ToastContainerProp> = forwardRef(
  function component({ position, onClose }, ref) {
    const [toasts, setToasts] = useState([]);

    useImperativeHandle(ref, () => ({
      add(toast: ToastDetail) {
        const t = {
          ...toast,
          id: Math.random().toString(32).substring(2),
        };
        if (position === Position.TOP) {
          setToasts([t, ...toasts]);
        } else if (position === Position.BOTTOM) {
          setToasts([...toasts, t]);
        }
      },
    }));

    const onCloseHandler = useCallback(
      (id: string) => {
        setToasts((old) => [...old.filter((t) => t.id !== id)]);
        onClose();
      },
      [toasts]
    );

    const classname = [
      "el_toast_container",
      `el_toast_container__position${position}`,
    ].join(" ");

    return (
      <div className={classname}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            id={t.id}
            color={t.color}
            message={t.message}
            time={t.time}
            onClose={onCloseHandler}
          />
        ))}
      </div>
    );
  }
);

ToastContainer.defaultProps = {
  position: Position.BOTTOM,
  onClose: () => {},
};

ToastContainer.propTypes = {
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM]),
  onClose: PropTypes.func,
};

export default ToastContainer;
