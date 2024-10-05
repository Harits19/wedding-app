import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";

export default function GalleryPage() {
  const text = useText();

  const ImageFull = () => {
    return (
      <Image
        alt="Message Image"
        src={kPublic.brideGroom1}
        className={`shrink-0 rounded-lg animate-fade-in `}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    );
  };

  const Image3 = () => (
    <div className=" relative flex flex-1 object-cover ">
      <ImageFull />
    </div>
  );

  const Image4 = () => (
    <div className="flex flex-1 relative">
      <ImageFull />
    </div>
  );

  const Row1 = ({ align = "left" }: { align?: "left" | "right" }) => {
    return (
      <div
        className={`flex flex-row  w-[100vw] h-[70vw] px-2 gap-x-2 ${align === "right" ? "flex-row-reverse" : ""}`}
      >
        <div className="flex flex-col h-full  w-1/3 gap-y-2">
          <Image3 />
          <Image3 />
        </div>
        <div className="flex h-full relative  w-2/3">
          <ImageFull />
        </div>
      </div>
    );
  };

  return (
    <Background2 className="px-0">
      <div className="flex flex-1 justify-center flex-col items-center font-cardo text-black text-[37px]">
        <InViewWrapper className="animate-fade-zoom">
          {text.gallery}
        </InViewWrapper>
        <div className="bg-white py-10 bg-opacity-50 border-2 border-white">
          <div className="h-4" />
          {/* Row1 */}
          <Row1 />
          <div className="h-4" />
          {/* Row2 */}
          <div className="flex flex-row w-[100vw] h-[50vw] px-4">
            <Image4 />
            <Image4 />
          </div>
          <div className="h-4" />
          <Row1 align="right" />
        </div>
      </div>
    </Background2>
  );
}
