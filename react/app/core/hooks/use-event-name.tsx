import { kEnv } from "../constans/env";

export const useEventName = () => {
  const eventName = kEnv.NEXT_PUBLIC_EVENT_NAME;

  return {
    isResepsi: eventName === "resepsi",
    isNgunduhMantu: eventName === "ngunduh-mantu",
  };
};
