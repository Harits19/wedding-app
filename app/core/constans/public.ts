import { kEnv } from "./env";



export const kPublic = (() => {

  const publicPath = {
    image1: "/images/image1.jpg",
    flower3: "/images/flower3.png",
    flower2: "/images/flower2.png",
    flower4: "/images/flower4.png",
    flower5: "/images/flower5.png",

    backgroundMusic: "/audio/background-music.mp3",
    brideGroom1: "/images/bride-groom1.jpeg",
    sideFlower1: "/images/side-flower1.png",
    sideFlower2: "/images/side-flower2.png",
    background1: "/images/background1.png",
    background2: "/images/background2.png",
    background3: "/images/background3.png",
    container1: "/images/container1.png",
    gallery1: "/images/gallery-1.jpeg",
    gallery2: "/images/gallery-2.jpeg",
    gallery3: "/images/gallery-3.jpeg",
    gallery4: "/images/gallery-4.jpeg",
    gallery5: "/images/gallery-5.jpeg",
    gallery6: "/images/gallery-6.jpeg",
    gallery7: "/images/gallery-7.jpeg",
    gallery8: "/images/gallery-8.jpeg",
    groomIntroduction: "/images/groom-introduction.jpeg",
    brideIntroduction: "/images/bride-introduction.jpeg",
    closingImage: "/images/closing-image.jpeg"
  };

  type PublicKey = keyof typeof publicPath;
  const basePath = kEnv.NEXT_PUBLIC_APP_BASE_PATH;
  if (basePath) {
    for (const [key, value] of Object.entries(publicPath)) {
      publicPath[key as PublicKey] = `${basePath}${value}`;
    }
  }
  return publicPath;
})()