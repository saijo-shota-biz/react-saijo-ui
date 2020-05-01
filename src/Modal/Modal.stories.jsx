import React from "react";
import Modal from "./Modal";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { useState, useCallback } from "@storybook/addons";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import Button from "../Button";
import { Color } from "../Button/Button";

export default {
  title: "Modal",
  component: Modal,
  decorators: [withKnobs, withInfo],
};

export const modal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const onClick = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const onChangeContent = useCallback(
    (e) => {
      setContent(e.target.value);
    },
    [content]
  );

  return (
    <>
      <button onClick={onClick}>モーダルを開く</button>
      <Modal
        open={open}
        onClose={onClose}
        header="お問い合わせ"
        body={
          <>
            <TextInput
              label="名前"
              value={name}
              onChange={onChangeName}
            ></TextInput>
            <TextInput
              label="Email"
              value={email}
              onChange={onChangeEmail}
            ></TextInput>
            <Textarea
              label="本文(メッセージ)"
              value={content}
              onChange={onChangeContent}
            ></Textarea>
          </>
        }
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color={Color.DEFAULT} outline onClick={onClose}>
              キャンセル
            </Button>
            <span style={{ margin: "10px" }}></span>
            <Button color={Color.MAIN} outline>
              送信
            </Button>
          </div>
        }
      ></Modal>
    </>
  );
};
