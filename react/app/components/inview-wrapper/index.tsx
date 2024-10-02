"use client";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export default function InViewWrapper(
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  return <div {...props} />;
}

export function InViewWrapperV2({
  onChange,
  ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  // eslint-disable-next-line no-unused-vars
  onChange?: (newValue: boolean) => void;
}) {
  const { inView, ref } = useInView({ onChange });
  return <div ref={ref} {...props} key={`${inView}-${props.key}`} />;
}
