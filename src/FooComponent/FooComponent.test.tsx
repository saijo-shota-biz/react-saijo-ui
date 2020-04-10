import React from "react";
import { shallow } from "enzyme";

import FooComponent, { FooComponentProp } from "./FooComponent";

describe("Test Component", () => {
  let props: FooComponentProp;

  beforeEach(() => {
    props = {
      color: "red",
    };
  });

  const renderWrapper = () => shallow(<FooComponent color={props.color} />);

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots as secondary themed", () => {
      props.color = "blue";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
