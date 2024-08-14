import { kPublic } from "@/app/core/constans/public";
import Image from "next/image";
import { ReactNode } from "react";
import Decoration, { DecorationProps } from "../decoration";
import { cn } from "@/app/core/utils/utils";

export default function Background2({
  children,
  className,
  divider,
}: {
  children: ReactNode;
  className?: string;
  divider?: DecorationProps;
}) {
  const Flower = ({ position = "top" }: { position?: "top" | "bottom" }) => {
    const isTop = position === "top";
    return (
      <div className=" absolute top-0 bottom-0 left-0 right-0 z-auto ">
        <div
          className={`flex flex-col ${isTop ? "justify-start" : "justify-end"} h-full`}
        >
          <Image
            alt=""
            src={kPublic.flower5}
            width={100}
            height={100}
            className={`h-1/2 w-full ${isTop ? "rotate-180" : ""} blur-sm object-cover z-auto`}
          />
        </div>
      </div>
    );
  };

  const RenderChildren = () => {
    return (
      <div className={cn([" relative w-full  py-[160px] px-4 ", className])}>
        {children}
      </div>
    );
  };

  return (
    <div className={`w-full relative font-cardo text-center bg-wedwhite-linen`}>
      <div className="opacity-0">
        <RenderChildren />
      </div>
      <Flower />
      <Flower position="bottom" />
      <Decoration {...divider} />

      <div className="absolute z-auto w-full h-full top-0 bottom-0 ">
        <RenderChildren />
      </div>
    </div>
  );
}
