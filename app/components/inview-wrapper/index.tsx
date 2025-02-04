"use client";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export default function InViewWrapper(
  props: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const { inView, ref } = useInView();
  return (
    <div ref={ref} {...props} key={`${inView}-${props.key}`} />
  );
}

export function InViewWrapperV2({
  onChange,
  ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  // eslint-disable-next-line no-unused-vars
  onChange?: (newValue: boolean) => void;
}) {
  const { inView, ref } = useInView({ onChange });
  return <div className={`${inView ? '': 'opacity-0'}`} ref={ref} {...props} key={`${inView}-${props.key}`} />;
}
