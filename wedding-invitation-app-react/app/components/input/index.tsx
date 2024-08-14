import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import RenderError from "../render-error";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  info?: string;
  label?: string;
}

export default function Input({ info, label, ...props }: InputProps) {
  return (
    <>
      <h3>{label}</h3>
      <input {...props} />
      <RenderError message={info} />
    </>
  );
}
