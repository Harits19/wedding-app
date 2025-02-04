import { ReactNode } from "react";
import InViewWrapper from "../inview-wrapper";
import Image from "next/image";

export default function Card({
  children,
  align = "left",
  background,
}: {
  children: ReactNode;
  align?: "left" | "right";
  background?: string;
}) {
  return (
    <div className=" mb-4 w-full border border-white p-2 shadow bg-white rounded-xl bg-opacity-50">
      <div
        className={` w-full border border-wedprimary-color border-opacity-10 flex flex-col animate-flip-right-to-left overflow-hidden shadow-xl rounded-xl  font-poppins text-black `}
      >
        <InViewWrapper
          className={`w-full flex flex-col   ${align === "left" ? "items-start text-left" : "items-end text-right"}`}
        >
          {background && (
            <Image
              src={background}
              alt="background card"
              width={100}
              height={100}
              className="absolute w-full h-full"
            />
          )}
          <div className="p-4 w-full opacity-0">{children}</div>
          <div className="p-4 w-full absolute">{children}</div>
        </InViewWrapper>
      </div>
    </div>
  );
}
