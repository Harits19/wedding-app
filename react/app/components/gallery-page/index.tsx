import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import { CarouselGallery } from "../carousel-gallery";

export default function GalleryPage() {
  const text = useText();

  return (
    <Background2 className="px-0">
      <div className="flex flex-1 justify-center flex-col items-center font-cardo text-black text-[37px]">
        <InViewWrapper className="animate-fade-zoom">
          {text.gallery}
        </InViewWrapper>
        <div className="h-4" />
        <CarouselGallery />
        <div className="h-4" />
        <CarouselGallery direction="rtl" />
      </div>
    </Background2>
  );
}
