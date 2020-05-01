import React from "react";
import Media from "./Media";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  title: "Media",
  component: Media,
  decorators: [withKnobs, withInfo],
};

export const media = () => (
  <Media
    header="テストタイトル"
    body={
      <>
        これはテスト記事です。これはテスト記事です。これはテスト記事です。これはテスト記事です。これはテスト記事です。これはテスト記事です。
      </>
    }
  ></Media>
);
