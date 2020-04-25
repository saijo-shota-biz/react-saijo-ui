import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.jsx
configure([require.context("../src", true, /\.stories\.jsx$/)], module);
