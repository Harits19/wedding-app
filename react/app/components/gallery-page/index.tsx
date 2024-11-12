import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";
import { CarouselGallery } from "../carousel-gallery";
import { useState } from "react";
import { Dialog } from "../ui/dialog";
import ImageFull, { ImageViewProps } from "../image-full";

const Image3 = (props: ImageViewProps) => (
  <div className=" relative flex flex-1 object-cover">
    <ImageFull {...props} />
  </div>
);

const Image4 = (props: ImageViewProps) => (
  <div className="flex flex-1 relative">
    <ImageFull {...props} />
  </div>
);

const ImageRowView = ({
  align = "left",
  images,
  onClick,
}: {
  align?: "left" | "right";
  images: readonly [string, string, string];
  // eslint-disable-next-line no-unused-vars
  onClick: (arg0: string) => void;
}) => {
  const [firstImage, secondImage, thirdImage] = images;
  return (
    <div
      className={`flex flex-row  w-full h-[288.4px] px-2 gap-x-2 ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col h-full  w-1/3 gap-y-2">
        {[firstImage, secondImage].map((item) => (
          <Image3
            key={item}
            image={item}
            onClick={() => {
              onClick(item);
            }}
          />
        ))}
      </div>
      <div className="flex h-full relative  w-2/3 items-center  ">
        <ImageFull
          image={thirdImage}
          onClick={() => {
            onClick(thirdImage);
          }}
        />
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const text = useText();
  const [selectedImage, setSelectedImage] = useState<string>();

  const row1Image = [
    kPublic.gallery1,
    kPublic.gallery2,
    kPublic.gallery3,
  ] as const;
  const row2Image = [kPublic.gallery4, kPublic.gallery5];
  const row3Image = [
    kPublic.gallery6,
    kPublic.gallery7,
    kPublic.gallery8,
  ] as const;
  const allRow = [...row1Image, ...row2Image, ...row3Image];

  return (
    <>
      <Dialog
        open={Boolean(selectedImage)}
        onOpenChange={(open) => {
          if (open === false) {
            setSelectedImage(undefined);
          }
        }}
      >
        <CarouselGallery items={allRow} initialImage={selectedImage} />
      </Dialog>
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
          <div className="bg-white py-10 bg-opacity-50 border-2 border-white w-full ">
            <div className="h-4" />
            {/* ƒ */}
            <ImageRowView images={row1Image} onClick={setSelectedImage} />
            <div className="h-4" />
            {/* Row2 */}
            <div className="flex flex-row w-full h-[206px] px-4 gap-x-2">
              {row2Image.map((item) => (
                <Image4
                  key={item}
                  image={item}
                  onClick={() => {
                    setSelectedImage(item);
                  }}
                />
              ))}
            </div>
            <div className="h-4" />
            <ImageRowView
              images={row3Image}
              align="right"
              onClick={setSelectedImage}
            />
          </div>
        </div>
      </Background2>
    </>
  );
}
