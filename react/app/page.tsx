/* eslint-disable no-unreachable */
"use client";

import { useEffect, useMemo, useState } from "react";
import WelcomePage from "./components/welcome-page";
import { WeddingContext } from "./core/hooks/use-wedding-provider";
import MusicControl from "./components/music-control";
import { kPublic } from "./core/constans/public";
import IntroductionPage from "./components/introduction-page";
import SchedulePage from "./components/schedule-page";
import GalleryPage from "./components/gallery-page";
import StoryPage from "./components/story-page";
import { kEnv } from "./core/constans/env";
import AttendancePage from "./components/attendance-page";
import GreetingPage from "./components/greeting-page";
import GiftPage from "./components/gift-page";
import CoverPage from "./components/cover-page";
import ClosingPage from "./components/closing-page";

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
          <WelcomePage />
          <IntroductionPage />
          <SchedulePage />
          <GalleryPage />
          <StoryPage />
          <AttendancePage />
          <GreetingPage />
          <GiftPage />
          <ClosingPage />

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
