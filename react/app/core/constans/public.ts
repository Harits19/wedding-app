import { kEnv } from "./env";

export const kPublic = {
  image1: "/images/image1.jpg",
  flower3: "/images/flower3.png",
  flower2: "/images/flower2.png",
  flower4: "/images/flower4.png",
  flower5: "/images/flower5.png",

  backgroundMusic: "/audio/background-music.webm",
  brideGroom1: kEnv.NEXT_PUBLIC_DEVELOPE_MODE
    ? "/images/bride-groom1-dummy.jpeg"
    : "/images/bride-groom1.jpeg",
  sideFlower1: "/images/side-flower1.png",
  sideFlower2: "/images/side-flower2.png",
  background1: "/images/background1.png",
  background2: "/images/background2.png",
  background3: "/images/background3.png",
  container1: "/images/container1.png",
};
