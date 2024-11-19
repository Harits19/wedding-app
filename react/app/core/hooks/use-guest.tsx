import { useSearchParams } from "next/navigation";
import lodash from "lodash";

export const useGuest = () => {
  const param = useSearchParams();
  const undanganAkadResepsi = param.get("guest") ?? undefined;
  const undanganResepsi = param.get("tamu") ?? undefined;
  const undanganNgunduhMantu = param.get("nama") ?? undefined;

  const namaTamu =
    undanganAkadResepsi || undanganResepsi || undanganNgunduhMantu;
  return {
    name: lodash.capitalize(namaTamu),
    rawName: namaTamu,
    undanganAkadResepsi,
    undanganNgunduhMantu,
    undanganResepsi,
  };
};
