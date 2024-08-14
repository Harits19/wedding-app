import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { kPublic } from "@/app/core/constans/public";
import { FaCircle } from "react-icons/fa";
import { cn } from "@/app/core/utils/utils";

export function CarouselGallery({
  direction = "ltr",
}: {
  direction?: "ltr" | "rtl";
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const items = Array.from({ length: 5 });
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
        direction,
      }}
      setApi={setApi}
      className="w-full relative"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((_, index) => (
          <CarouselItem key={index}>
            <Image
              className=" w-full h-[240px] object-cover px-4"
              alt="asad"
              src={kPublic.brideGroom1}
              width={100}
              height={50}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={cn(
          "flex flex-row text-[8px] gap-x-1 pb-2 w-full justify-center absolute bottom-0",
          direction === "rtl" ? "flex-row-reverse" : "",
        )}
      >
        {items.map((item, index) => {
          const isShow = current === index;
          return (
            <FaCircle
              key={index}
              color={isShow ? "white" : "black"}
              className="opacity-50"
            />
          );
        })}
      </div>
    </Carousel>
  );
}
