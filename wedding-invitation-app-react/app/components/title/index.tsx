import InViewWrapper from "../inview-wrapper";

export default function Title({ title }: { title: string }) {
  return (
    <InViewWrapper className="text-[37px] animate-fade-in-bottom-top">
      {title}
    </InViewWrapper>
  );
}
