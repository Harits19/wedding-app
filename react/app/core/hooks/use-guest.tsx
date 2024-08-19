import { useSearchParams } from "next/navigation";
import lodash from "lodash";

export const useGuest = () => {
  const param = useSearchParams();
  const name = param.get("guest") ?? undefined;
  return {
    name: lodash.capitalize(name ?? ""),
    rawName: name,
  };
};
