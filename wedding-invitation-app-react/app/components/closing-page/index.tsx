import { useText } from "@/app/core/hooks/use-text";
import Background1 from "../background-1";
import { FaHeart } from "react-icons/fa";
import InViewWrapper from "../inview-wrapper";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";

export default function ClosingPage() {
  const text = useText();
  return (
    <Background1>
      <div className="flex flex-col m-4 rounded-xl text-wed303333 items-center justify-center text-center  border border-white bg-white h-full -my-[240px] py-[160px] bg-opacity-70">
        <div className=" font-cormorant italic ">
          {text.merupakanSuatuKebahagiaan}
        </div>
        <div className="h-2" />

        <InViewWrapper className="animate-fade-zoom text-[18px] font-bold">{text.waalaikumussalam}</InViewWrapper>
        <div className="h-8" />
        <InViewWrapper className="animate-flip-right-to-left">
          <Image
            alt=""
            src={kPublic.brideGroom1}
            width={260}
            height={101}
            className="overflow-hidden border-2 border-white w-[260px] h-[181px] object-cover shadow-3xl"
            style={{
              objectPosition: "50% 20%",
            }}
          />
        </InViewWrapper>
        <div className="h-8" />
        <div className="text-[14px]">{text.kamiYangBerbahagia}</div>

        <div className="h-1" />
        <InViewWrapper className="animate-fade-zoom font-cardo text-[26px] font-bold">
          {text.brideAndGroom}
        </InViewWrapper>
        <div className="h-8" />

        <InViewWrapper className="animate-fade-in-bottom-top flex flex-row text-[14px] items-center gap-x-2">
          {text.madeWith}
          <FaHeart className="text-wedE97777C7" />
          {text.byBrideAndGroom}
        </InViewWrapper>
      </div>
    </Background1>
  );
}
