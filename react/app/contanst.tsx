import {
  FaCalendar,
  FaDoorClosed,
  FaDoorOpen,
  FaEnvelope,
  FaGift,
  FaHeart,
  FaImages,
  FaUserFriends,
} from "react-icons/fa";
import WelcomePage from "./components/welcome-page";
import IntroductionPage from "./components/introduction-page";
import SchedulePage from "./components/schedule-page";
import GalleryPage from "./components/gallery-page";
import StoryPage from "./components/story-page";
import GreetingPage from "./components/greeting-page";
import GiftPage from "./components/gift-page";
import ClosingPage from "./components/closing-page";
import QuoteView from "./components/quote-view";

export const listMainMenu = [
  {
    icon: FaDoorOpen,
    view: (
      <>
        <WelcomePage />
        <QuoteView />
      </>
    ),
    key: "Opening",
  },
  {
    icon: FaUserFriends,
    view: <IntroductionPage />,
    key: "Mempelai",
  },
  {
    icon: FaCalendar,
    view: <SchedulePage />,
    key: "Jadwal",
  },
  {
    icon: FaImages,
    view: <GalleryPage />,
    key: "Galeri",
  },
  {
    icon: FaHeart,
    view: <StoryPage />,
    key: "Cerita Kami",
  },
  {
    icon: FaEnvelope,
    view: <GreetingPage />,
    key: "Pesan",
  },
  {
    icon: FaGift,
    view: <GiftPage />,
    key: "Hadiah",
  },
  {
    icon: FaDoorClosed,
    view: <ClosingPage />,
    key: "Terimakasih",
  },
];
