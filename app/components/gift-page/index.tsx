import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import Title from "../title";
import Card from "../card";
import { FaCopy, FaWallet, FaWhatsapp } from "react-icons/fa";
import { confirmWhatsapp, copyText } from "@/app/core/utils/text";
import InViewWrapper from "../inview-wrapper";
import SmallButton from "../small-button";

export default function GiftPage() {
  const text = useText();

  const RenderCard = ({
    bankName,
    atasNama,
    noRekening,
    whatsapp,
  }: {
    bankName: string;
    noRekening: string;
    whatsapp: string;
    atasNama: string;
  }) => {
    const Description = ({
      subtitle,
      title,
    }: {
      title: string;
      subtitle: string;
    }) => {
      return (
        <>
          <div className="font-cormorant text-sm">{title}</div>
          <div>{subtitle}</div>
        </>
      );
    };

    return (
      <InViewWrapper className="animate-fade-in-top-bottom">
        <Card>
          <div className="flex flex-col w-full p-3">
            <div className="flex flex-row w-full justify-between items-center">
              <div className="font-cardo">{text.weddingGift}</div>
              <div className="border-b-2 border-b-black pl-8">{bankName}</div>
            </div>
            <div className="h-1" />
            <div className="flex flex-row items-center w-full justify-between">
              <div className="flex flex-col">
                <Description title={text.noRekening} subtitle={noRekening} />
                <div className="h-3" />
                <SmallButton
                  className="w-fit"
                  icon={<FaCopy />}
                  title={text.copy}
                  onClick={() => {
                    copyText(noRekening);
                  }}
                />
                <SmallButton
                  className="w-fit"
                  icon={<FaWhatsapp />}
                  title={text.konfirmasiViaWA}
                  onClick={() => {
                    confirmWhatsapp(
                      whatsapp,
                      `${text.whatsappConfirmationText} ${text.uang}`,
                    );
                  }}
                />
                <div className="h-3" />

                <Description title={text.atasNama} subtitle={atasNama} />
              </div>

              <FaWallet className="text-[80px] text-wedE97777C7" />
            </div>
          </div>
        </Card>
      </InViewWrapper>
    );
  };
  return (
    <Background2>
      <Title title={text.weddingGift} />
      <InViewWrapper className="animate-top-bottom-fade font-cormorant py-6 italic px-2">
        {text.tanpaMengurangiRasaHormat}
      </InViewWrapper>

      {[text.bankFirstPerson, text.bankSecondPerson].map((item) => (
        <RenderCard key={item.noRekening} {...item} />
      ))}

      <div className="h-10" />
    </Background2>
  );
}
