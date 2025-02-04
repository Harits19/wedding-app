import { useSearchParams } from "next/navigation";
import lodash from "lodash";

const useWedSearchParams = () => {
  const params = useSearchParams();

  return {
    ...params,
    get: (value: string) => params.get(value) ?? undefined,
  };
};

export const useGuest = () => {
  const param = useWedSearchParams();
  const undanganAkadResepsi = param.get("guest");
  const undanganResepsi = param.get("tamu");
  const undanganNgunduhMantu = param.get("nama");
  const undanganResepsiNgunduhMantu = param.get("name");

  const namaTamu =
    undanganAkadResepsi ||
    undanganResepsi ||
    undanganNgunduhMantu ||
    undanganResepsiNgunduhMantu;
  return {
    name: lodash.capitalize(namaTamu),
    rawName: namaTamu,
    undanganAkadResepsi,
    undanganNgunduhMantu,
    undanganResepsi,
    undanganResepsiNgunduhMantu,
  };
};
