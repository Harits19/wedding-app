"use client";

import { useState } from "react";
import Input from "../input";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { useTokenState } from "@/app/core/hooks/use-token";

export default function ModalToken() {
  const { isEmpty, setToken } = useTokenState();
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <Button onClick={() => setShowModal(true)}>Set Token</Button>
      <Dialog open={isEmpty || showModal} onOpenChange={setShowModal}>
        <div>Set Token</div>
        <Input
          value={text}
          onChange={(val) => setText(val.target.value)}
          placeholder="Insert token to access"
        />
        <Button
          onClick={() => {
            setToken(text);
            setShowModal(false);
          }}
        >
          Save
        </Button>
      </Dialog>
    </div>
  );
}
