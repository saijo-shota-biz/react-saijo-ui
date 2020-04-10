import React from "react";
import "./FooComponent.scss";

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

export default FooComponent;
