"use client";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export default function InViewWrapper(
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const { inView, ref } = useInView();
  return <div ref={ref} key={`${inView}`} {...props} />;
}
