import { useText } from "@/app/core/hooks/use-text";
import Background1 from "../background-1";
import { FaLocationArrow } from "react-icons/fa";
import Card from "../card";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";

export default function SchedulePage() {
  const text = useText();

  const RenderCard = ({
    value: {
      date,
      location1,
      location2,
      time,
      title,
      linkLocation,
      showLocation,
      hidden,
    },
    align = "left",
    bigFont = false,
  }: {
    value: {
      title: string;
      date: string;
      time: string;
      location1: string;
      location2: string;
      linkLocation: string;
      showLocation?: boolean;
      hidden?: boolean;
    };
    align?: "left" | "right";
    bigFont?: boolean;
  }) => {
    if (hidden) return;
    return (
      <Card background={kPublic.background3} align={align}>
        <div className={`font-cardo text-[${bigFont ? 20 : 18}px] font-bold`}>
          {title}
        </div>
        <div className={`text-[${bigFont ? 14 : 12}px]`}>{date}</div>
        <div className={`text-[${bigFont ? 14 : 12}px]`}>{time}</div>
        <Image
          className={`absolute ${align === "left" ? "right-0 -mr-5" : "left-0 scale-x-[-1] -ml-5"} bottom-0 -mb-5 opacity-30`}
          width={100}
          height={100}
          alt=""
          src={kPublic.sideFlower1}
        />

        <div className="h-2" />
        <div className={`text-[${bigFont ? 14 : 12}px]`}>
          {text.bertempatDi}
        </div>
        <div className={`text-[${bigFont ? 16 : 14}px] font-bold`}>
          {location1}
        </div>
        {showLocation && (
          <>
            <div className={`text-[${bigFont ? 14 : 12}px]`}>{location2}</div>
            <div className="h-2" />
            <div
              className={`flex flex-row ${align === "left" ? "justify-start" : " justify-end"}`}
            >
              <button
                onClick={() => {
                  window.open(linkLocation);
                }}
                className="bg-wedprimary-color text-white rounded-md font-cardo text-[12px] items-center justify-center px-2 py-1 flex flex-row"
              >
                <FaLocationArrow width={12} height={12} size={"12px"} />
                <div className="w-2" />
                <div>{text.lihatLokasi + " " + title}</div>
              </button>
            </div>
          </>
        )}
      </Card>
    );
  };

  return (
    <Background1>
      <div className="flex flex-col p-4 justify-center items-center ">
        <div className="text-center px-4 bg-white rounded-lg border-2 text-black border-white bg-opacity-95 py-4">
          Tanpa mengurangi rasa hormat, kami bermaksud untuk mengundang
          bapak/ibu/saudara/i untuk menghadiri acara pernikahan kami yang
          insyaAllah akan diselenggarakan pada :
        </div>
        <div className="h-8" />
        <RenderCard value={text.akad} align="right" />
        <div className="h-4" />
        <RenderCard value={text.resepsi} bigFont />
        <RenderCard value={text.ngunduhMantu} bigFont />
      </div>
    </Background1>
  );
}
