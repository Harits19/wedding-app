"use client";

import { useEffect, useMemo, useState } from "react";
import { WeddingContext } from "./core/hooks/use-wedding-provider";
import MusicControl from "./components/music-control";
import { kPublic } from "./core/constans/public";
import { kEnv } from "./core/constans/env";
import CoverPage from "./components/cover-page";
import BottomNavigation from "./components/bottom-navigation";
import { listMainMenu } from "./contanst";
import { InViewWrapperV2 } from "./components/inview-wrapper";

export default function Page() {
  const defaultShowCover = kEnv.NEXT_PUBLIC_DEVELOPE_MODE ? false : true;
  const [showCover, setShowCover] = useState(defaultShowCover);
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);
  const audio = useMemo(() => {
    if (kEnv.NEXT_PUBLIC_DEVELOPE_MODE) return undefined;
    try {
      return new Audio(kPublic.backgroundMusic ?? "");
    } catch (error) {
      return undefined;
    }
  }, []);

  useEffect(() => {
    if (!audio) return;
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    if (!audio) return;
    if (musicIsPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, musicIsPlaying]);

  const topComponent = "top-component";

  return (
    <WeddingContext.Provider
      value={{
        setShowCover: (value) => {
          setShowCover(value);
          if (value === false) {
            setMusicIsPlaying(true);
          }
        },
        showCover,
        musicIsPlaying,
        setMusicIsPlaying,
        scrollToTop: () => {
          document
            .getElementById(topComponent)
            ?.scrollIntoView({ behavior: "smooth" });
        },
      }}
    >
      <div className="bg-gray-50   w-screen h-screen flex flex-row justify-center font-cormorant">
        <div
          className={`flex flex-col relative w-mobile ${showCover ? "overflow-y-hidden" : "overflow-y-scroll"} h-screen`}
        >
          <div id={topComponent} />
          <CoverPage />
          {listMainMenu.map((item) => (
            <div key={item.key} id={item.key}>
              <InViewWrapperV2>{item.view}</InViewWrapperV2>
            </div>
          ))}
          {!showCover && (
            <div className="fixed w-full justify-center px-4 mb-4  flex flex-row bottom-0">
              <BottomNavigation />
            </div>
          )}

          {!showCover && (
            <div className="fixed w-min mb-20  flex flex-row justify-end self-end bottom-0">
              <MusicControl />
            </div>
          )}
        </div>
      </div>
    </WeddingContext.Provider>
  );
}
