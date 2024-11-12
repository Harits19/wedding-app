import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { cn } from "@/app/core/utils/utils";
import ImageFull from "../image-full";

export function CarouselGallery({
  direction = "ltr",
  items = [],
  initialImage,
}: {
  direction?: "ltr" | "rtl";
  items?: string[];
  initialImage?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const getCurrentIndex = () =>
    items.findIndex((item) => item === initialImage);
  const [current, setCurrent] = React.useState(getCurrentIndex);
  React.useEffect(() => {
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col w-full ">
      <Carousel
        opts={{
          loop: true,
          direction,
        }}
        startIndex={getCurrentIndex()}
        setApi={setApi}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                className=" w-full flex flex-col items-center justify-center h-[240px] object-contain px-4"
                alt={item}
                src={item}
                width={100}
                height={50}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-4" />

      <div
        className={cn(
          "flex flex-1 text-[8px] gap-x-1 justify-center px-4 w-full ",
          direction === "rtl" ? "flex-row-reverse" : "flex-row",
        )}
      >
        {items.map((item, index) => {
          const isShow = current === index;
          return (
            <div
              className={`h-8 w-8 relative ${isShow ? "border-2 border-white" : ""}`}
              key={index}
            >
              <ImageFull
                className="rounded-none"
                image={item}
                onClick={() => {
                  api?.scrollTo(index);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
