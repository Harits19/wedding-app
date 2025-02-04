import { useGuest } from "./use-guest";

export const useEventName = () => {
  const {
    undanganAkadResepsi,
    undanganNgunduhMantu,
    undanganResepsi,
    undanganResepsiNgunduhMantu,
  } = useGuest();

  const isInvitedToAkad = Boolean(undanganAkadResepsi),
    isInvitedToResepsi = Boolean(undanganResepsi),
    isInvitedToNgunduhMantu = Boolean(undanganNgunduhMantu),
    isInvitedResepsiNgunduhMantu = Boolean(undanganResepsiNgunduhMantu);

  return {
    isInvitedToAkad,
    isInvitedToResepsi:
      isInvitedToAkad || isInvitedResepsiNgunduhMantu || isInvitedToResepsi,
    isInvitedToNgunduhMantu:
      isInvitedResepsiNgunduhMantu || isInvitedToNgunduhMantu,
  };
};
