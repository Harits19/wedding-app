"use client";

import { ReactNode } from "react";
import ModalToken from "../components/modal-token";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ModalToken />
      {children}
    </>
  );
}
