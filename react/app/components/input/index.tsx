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
      <input {...props} className={`${props.className} backdrop-blur bg-white bg-opacity-50`} />
      <RenderError message={info} />
    </>
  );
}
