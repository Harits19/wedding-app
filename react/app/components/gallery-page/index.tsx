import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";

export default function GalleryPage() {
  const text = useText();

  const ImageFull = ({ image }: { image?: string }) => {
    if (!image) return;
    return (
      <Image
        alt="Message Image"
        src={image}
        className={`shrink-0 rounded-lg animate-fade-in `}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    );
  };

  const Image3 = ({ image }: { image?: string }) => (
    <div className=" relative flex flex-1 object-cover ">
      <ImageFull image={image} />
    </div>
  );

  const Image4 = ({ image }: { image?: string }) => (
    <div className="flex flex-1 relative">
      <ImageFull image={image} />
    </div>
  );

  const Row1 = ({
    align = "left",
    images = [],
  }: {
    align?: "left" | "right";
    images: string[];
  }) => {
    return (
      <div
        className={`flex flex-row  w-[100vw] h-[70vw] px-2 gap-x-2 ${align === "right" ? "flex-row-reverse" : ""}`}
      >
        <div className="flex flex-col h-full  w-1/3 gap-y-2">
          <Image3 image={images.at(0)} />
          <Image3 image={images.at(1)} />
        </div>
        <div className="flex h-full relative  w-2/3">
          <ImageFull image={images.at(2)} />
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
        <div className="h-4" />
        <div className="text-center text-[14px] italic px-4">
          {`"Sesungguhnya tidak ada laki-laki dan perempuan yang sempurna,
          tetapi kesempurnaan diciptakan apabila keduanya saling menutupi
          kekurangan"`}
          <div className="h-2" />
          <div className="font-bold not-italic">Habib Umar bin Hafidz</div>
        </div>
        <div className="h-4" />
        <div className="bg-white py-10 bg-opacity-50 border-2 border-white">
          <div className="h-4" />
          {/* Row1 */}
          <Row1
            images={[kPublic.gallery1, kPublic.gallery2, kPublic.gallery3]}
          />
          <div className="h-4" />
          {/* Row2 */}
          <div className="flex flex-row w-[100vw] h-[50vw] px-4 gap-x-2">
            <Image4 image={kPublic.gallery4} />
            <Image4 image={kPublic.gallery5} />
          </div>
          <div className="h-4" />
          <Row1
            images={[kPublic.gallery6, kPublic.gallery7, kPublic.gallery8]}
            align="right"
          />
        </div>
      </div>
    </Background2>
  );
}
