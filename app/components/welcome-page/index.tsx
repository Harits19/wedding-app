import { useText } from "@/app/core/hooks/use-text";
import Background1 from "../background-1";
import CountdownView from "../countdown-view";
import { useEventName } from "@/app/core/hooks/use-event-name";

export default function WelcomePage() {
  const { rawWeddingDate, rawNgunduhMantuDate, ...text } = useText();
  const { isInvitedToNgunduhMantu, isInvitedToResepsi } = useEventName();

  return (
    <Background1>
      <div className="text-wedprimary-color flex flex-col items-center text-center">
        <div className="font-cardo  text-[20px] bg-white bg-opacity-90 border-2 border-white px-4 rounded-lg">
          {text.theWeddingOf}
        </div>
        <div className="h-8" />
        <div className="font-italiana text-[40px] bg-white bg-opacity-90 border-2 border-white px-4 rounded-lg">
          {text.brideAndGroom}
        </div>
        <div className="h-8" />
        {isInvitedToResepsi && (
          <CountdownView date={rawWeddingDate} title="Resepsi" />
        )}
        {isInvitedToNgunduhMantu && (
          <CountdownView date={rawNgunduhMantuDate} title="Ngunduh Mantu" />
        )}
      </div>
    </Background1>
  );
}
