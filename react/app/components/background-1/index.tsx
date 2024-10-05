import { kPublic } from "@/app/core/constans/public";
import Image from "next/image";
import { ReactNode } from "react";
import Decoration, { DecorationProps } from "../decoration";

export default function Background1({
  children,
  divider,
}: {
  children?: ReactNode;
  divider?: DecorationProps;
}) {
  const SideFlower = ({ className = "" }: { className?: string }) => (
    <Image
      className={`w-1/2 h-fit right-0 absolute object-contain bottom-0 z-auto ${className}`}
      width={100}
      height={100}
      alt=""
      src={kPublic.sideFlower1}
    />
  );

  const RenderChildren = () => <div className={`py-[160px] `}>{children}</div>;

  return (
    <div className="relative w-full bg-wedbackground-color-light  font-cardo text-wedprimary-color">
      <div className="absolute z-auto h-full w-full">
        <Image
          alt=""
          src={kPublic.background2}
          width={100}
          height={100}
          className=" object-cover  w-full h-full"
        />
      </div>
      <SideFlower className="z-auto" />
      <SideFlower className="top-0 rotate-180 left-0  z-auto" />
      <div className="opacity-0">
        <RenderChildren />
      </div>
      <Decoration {...divider} />

      <div className="absolute top-0 bottom-0 h-full w-full z-auto">
        <RenderChildren />
      </div>
    </div>
  );
}
