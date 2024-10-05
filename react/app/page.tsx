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
import { MenuContext } from "./core/hooks/use-menu-provider";

/// TODO
/**
 * // Opening di pendekin
 * 
 * // Surat Ar Rum dikasih tulisan arabnya
 * 
 * //animasi di quote di fix saat scroll kebawah
 * //quote view di kecilin
 * //di pengenalan pengantin dikasih tulisan bahasa arab bismillah
 * //Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Insya Allah, akan diselenggarakan acara pernikahan antara :
 * Fotonya oval
 * Ganti animasi ke fade untuk foto pengenalan
 * Space kosong dikurangin
 * Wording di schedule Tanpa mengurangi rasa hormat, kami bermaksud untuk mengundang bapak/ibu/saudara/i untuk menghadiri acara pernikahan kami yang insyaAllah akan diselenggarakan pada 
 * Tulis lokasi asli di halaman schedule
 * Pakai bahasa indonesia untuk semua selain opening
 * Ukuran font halaman jadwal untuk resepsi diperbesar
 * Galeri diganti kotak2 beda ukuran seperti undangan pake background putih
 * 
 * 
 * Love story
 * Februari 2020 dihapus
 * Yang Oktober 2019 ganti ke November 2019
 * 
 * Reservasi dibikin dialog buat ucapan 
 * Doa ucapan dibikin transparant, dikasih blur
 * 
 * Gallery dikasih quote
 * 
 * Wedding gift diisi dengana data beneran
 * 
 * Wedding gift dihilangin yang kado offline
 * 
 * Di pengenalan ada logo dan akun instagram, ketika di klik diarahin ke akun instagram masing masing
 * 
 * 
 * Foto di closing diganti oval, terus agak dibesarin
 * 
 * 
 * diganti ke Fia & Harits
 * 
 * @returns 
 */

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
  const [selectedMenu, setSelectedMenu] = useState<string>();

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
            ?.scrollIntoView({ behavior: "instant" });
        },
      }}
    >
      <MenuContext.Provider
        value={{
          menu: selectedMenu,
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
                <InViewWrapperV2
                  onChange={(value) => {
                    if (value === true) {
                      setSelectedMenu(item.key);
                      document
                        .getElementById(`menu-${item.key}`)
                        ?.scrollIntoView({
                          behavior: "instant",
                          block: "center",
                          inline: "center",
                        });
                    }
                  }}
                >
                  {item.view}
                </InViewWrapperV2>
              </div>
            ))}
            {!showCover && (
              <div className="fixed w-full justify-center left-0 right-0 flex flex-row bottom-0">
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
      </MenuContext.Provider>
    </WeddingContext.Provider>
  );
}
