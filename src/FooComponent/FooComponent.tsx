import React from "react";
import "./FooComponent.scss";
import PropTypes from "prop-types";

export type FooComponentProp = {
  color: "red" | "blue";
};

const FooComponent: React.FC<FooComponentProp> = ({ color }) => {
  return (
    <div className="foo" style={{ color }}>
      Foo
    </div>
  );
};

FooComponent.propTypes = {
  color: PropTypes.oneOf(["red", "blue"]),
};

export default FooComponent;
