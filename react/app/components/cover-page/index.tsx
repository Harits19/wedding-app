import { kPublic } from "@/app/core/constans/public";
import { useGuest } from "@/app/core/hooks/use-guest";
import { useText } from "@/app/core/hooks/use-text";
import { useWeddingState } from "@/app/core/hooks/use-wedding-provider";
import Image from "next/image";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import ButtonBrown from "../button-brown";
import { useEventName } from "@/app/core/hooks/use-event-name";

export default function CoverPage() {
  const { resepsiDate, ngunduhMantuDate, ...text } = useText();
  const guest = useGuest();
  const { setShowCover, showCover } = useWeddingState();
  const { isInvitedToResepsi, isInvitedToNgunduhMantu } = useEventName();
  const RenderName = ({ text }: { text: string }) => {
    return <span className="font-cardo text-3xl text-wed303333 ">{text}</span>;
  };
  const Background1 = ({
    className = "",
    src,
  }: {
    className?: string;
    src: string;
  }) => {
    return (
      <Image
        alt=""
        src={src}
        width={100}
        height={100}
        className={`absolute w-mobile object-cover z-auto ${className} `}
      />
    );
  };

  const Flower = ({ className = "" }: { className?: string }) => {
    return (
      <Image
        alt=""
        width={100}
        height={100}
        src={kPublic.sideFlower2}
        className={` h-[150px] left-0 right-0 self-center w-mobile object-contain absolute z-auto ${className}`}
      />
    );
  };
  return (
    <div
      className={`bg-white overflow-hidden absolute top-0 min-h-screen z-10 left-0 right-0 ${!showCover ? "animate-fade-out-bottom-top" : ""}`}
    >
      <Background1
        src={kPublic.background2}
        className="top-0 bottom-0 right-0 left-0 h-full w-mobile object-contain"
      />
      <Background1
        src={kPublic.container1}
        className="top-0 bottom-0 self-center p-0"
      />

      <Flower className="-mt-8" />
      <Flower className="rotate-180 -mb-10 bottom-0" />

      <div className="absolute text-wedprimary-color top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <div className={`animate-top-bottom-fade flex flex-col items-center `}>
          <span className="font-arizona  text-xl">{text.theWeddingOf}</span>
          <RenderName text={text.name1} />
          <div className="font-arizona text-[32px] -my-2">{text.and}</div>
          <RenderName text={text.name2} />
        </div>


        {isInvitedToResepsi && (
          <div className=" animate-fade-in mt-6">{resepsiDate}</div>
        )}
        {isInvitedToNgunduhMantu && (
          <>
            &<div className=" animate-fade-in">{ngunduhMantuDate}</div>
          </>
        )}

        <div className="h-6" />

        <div className="animate-bottom-top-fade flex flex-col items-center">
          <div className="animate-fade-in-bottom-top">{text.kepadaYth}</div>
          <div className="animate-fade-in-bottom-top">
            {text.bapakIbuSaudara}
          </div>
          <div className="text-[11px] font-normal px-4 leading">
            {text.mohonMaafJikaAdaKesalahanPenulisanNama}
          </div>
          <div className="h-4" />

          <div className="my-2 animate-fade-in-bottom-top capitalize font-poppins font-extrabold text-xl text-center text-wed303333 ">
            {guest.name}
          </div>

          <div className="h-4" />
          <ButtonBrown
            onClick={() => {
              setShowCover(false);
            }}
          >
            <FaRegEnvelopeOpen />
            {text.bukaUndangan}
          </ButtonBrown>
        </div>
      </div>
    </div>
  );
}
