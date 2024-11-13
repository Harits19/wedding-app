import { useGuest } from "./use-guest";
import { useWhitelistFindByName } from "./use-whitelist";

export const useEventName = () => {
  const { rawName } = useGuest();
  const { data } = useWhitelistFindByName(rawName);

  return { ...(data?.data ?? {}) };
};
