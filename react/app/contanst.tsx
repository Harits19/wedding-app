import {
  FaCalendar,
  FaCheckCircle,
  FaDoorClosed,
  FaDoorOpen,
  FaEnvelope,
  FaGift,
  FaHistory,
  FaImages,
  FaUserFriends,
} from "react-icons/fa";
import WelcomePage from "./components/welcome-page";
import IntroductionPage from "./components/introduction-page";
import SchedulePage from "./components/schedule-page";
import GalleryPage from "./components/gallery-page";
import StoryPage from "./components/story-page";
import AttendancePage from "./components/attendance-page";
import GreetingPage from "./components/greeting-page";
import GiftPage from "./components/gift-page";
import ClosingPage from "./components/closing-page";

export const listMainMenu = [
  {
    icon: FaDoorOpen,
    view: <WelcomePage />,
    key: "welcome",
  },
  {
    icon: FaUserFriends,
    view: <IntroductionPage />,
    key: "introduction",
  },
  {
    icon: FaCalendar,
    view: <SchedulePage />,
    key: "schedule",
  },
  {
    icon: FaImages,
    view: <GalleryPage />,
    key: "gallery",
  },
  {
    icon: FaHistory,
    view: <StoryPage />,
    key: "story",
  },
  {
    icon: FaCheckCircle,
    view: <AttendancePage />,
    key: "attendance",
  },
  {
    icon: FaEnvelope,
    view: <GreetingPage />,
    key: "greeting",
  },
  {
    icon: FaGift,
    view: <GiftPage />,
    key: "gift",
  },
  {
    icon: FaDoorClosed,
    view: <ClosingPage />,
    key: "closing",
  },
];
