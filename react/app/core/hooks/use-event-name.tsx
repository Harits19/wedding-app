import { useGuest } from "./use-guest";

export const useEventName = () => {
  const { undanganAkadResepsi, undanganNgunduhMantu, undanganResepsi } =
    useGuest();

  const isInvitedToAkad = Boolean(undanganAkadResepsi),
    isInvitedToResepsi = Boolean(undanganResepsi),
    isInvitedToNgunduhMantu = Boolean(undanganNgunduhMantu);

  return {
    isInvitedToAkad,
    isInvitedToResepsi: isInvitedToAkad ? isInvitedToAkad : isInvitedToResepsi,
    isInvitedToNgunduhMantu,
  };
};
