import { ReactNode } from "react";
import InViewWrapper from "../inview-wrapper";

export default function Card({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className=" mb-4 w-full border border-white p-2 shadow bg-white rounded-xl bg-opacity-50">
      <div
        className={` w-full flex flex-col shadow-xl rounded-xl p-4 font-poppins text-black `}
      >
        <InViewWrapper
          className={`w-full flex flex-col  animate-flip-right-to-left ${align === "left" ? "items-start text-left" : "items-end text-right"}`}
        >
          {children}
        </InViewWrapper>
      </div>
    </div>
  );
}
