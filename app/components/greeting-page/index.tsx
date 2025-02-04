import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import ButtonBrown from "../button-brown";
import { useGreeting } from "@/app/core/hooks/use-greeting";
import moment from "moment";
import Background1 from "../background-1";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import AttendanceView from "../attendance-page";

export default function GreetingPage() {
  const [showDialog, setShowDialog] = useState(false);

  const text = useText();
  const { get } = useGreeting();
  const { data, isLoading } = get;

  const greeting = data?.data ?? [];

  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <Background2>
          <InViewWrapper className="animate-fade-in-bottom-top w-full font-poppins  px-4 py-8">
            <AttendanceView
              onSubmitSuccess={() => {
                setShowDialog(false);
              }}
            />
          </InViewWrapper>
        </Background2>
      </Dialog>
      <Background1>
        <div className="flex flex-1 justify-center flex-col w-full items-center font-cardo text-black">
          <InViewWrapper className="animate-fade-zoom text-[37px] bg-white rounded-full bg-opacity-70  p-4">
            {text.doaDanUcapan}
          </InViewWrapper>

          <div className="h-10" />

          <div className="w-full mx-4">
            <div className="relative rounded-lg overflow-hidden">
              <InViewWrapper className=" h-[400px] overflow-y-scroll rounded-lg gap-y-4 flex flex-col mx-4   ">
                {isLoading
                  ? "Loading"
                  : greeting.map((item, index) => {
                      const getInitial = () => {
                        const words = item.name.split(" ");
                        const getFirstLetter = (index: number) =>
                          words.at(index)?.substring(0, 1).toUpperCase();
                        const first = getFirstLetter(0);
                        if (words.length > 1) {
                          const second = getFirstLetter(1);
                          return `${first}${second}`;
                        }
                        return first;
                      };
                      const colorName =
                        index % 2 === 0 ? "bg-wedDriftwood" : "bg-wedRed";
                      return (
                        <InViewWrapper
                          className="animate-fade-in-bottom-top shadow bg-white text-left rounded-lg flex flex-row p-4 items-stretch w-full backdrop-blur bg-opacity-50"
                          key={item.id}
                        >
                          <div
                            className={`h-[50px] w-[50px] flex flex-col ${colorName} text-white rounded-full items-center justify-center `}
                          >
                            {getInitial()}
                          </div>
                          <div className="flex flex-col pl-4 flex-1">
                            <div className="text-wedDriftwood">{item.name}</div>
                            <div className="h-1" />
                            <div className="font-poppins ">{item.message}</div>
                            <div className="h-4" />
                            <div className="text-xs opacity-30 text-right">
                              {moment(item.createdAt).format("DD/MM/YYYY")}
                            </div>
                          </div>
                        </InViewWrapper>
                      );
                    })}
              </InViewWrapper>
              <div className="h-8" />
              <div className="flex flex-row justify-center">
                <ButtonBrown
                  onClick={() => {
                    setShowDialog(true);
                  }}
                >
                  Kirim Ucapan dan RSVP
                </ButtonBrown>
              </div>
            </div>
          </div>
        </div>
      </Background1>
    </>
  );
}
