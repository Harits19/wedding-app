import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import { FaRegHeart } from "react-icons/fa";
import InViewWrapper from "../inview-wrapper";
import Title from "../title";

export default function StoryPage() {
  const text = useText();
  return (
    <Background2>
      <div className="flex flex-col h-full items-center justify-center font-cardo text-black">
        <Title title={text.loveStory.title} />
        {text.loveStory.value.map((item, index) => {
          const Line = () => <div className="bg-black h-0.5 flex flex-1" />;
          const Separator = () => (
            <div className="flex flex-row w-full items-center gap-x-2 ">
              <Line />
              <FaRegHeart />
              <Line />
            </div>
          );
          return (
            <div key={index} className="w-full">
              {index !== 0 ? <Separator /> : <div />}
              <InViewWrapper className="font-poppins text-[10px] my-4 animate-fade-in-top-bottom">
                <div className="font-cardo font-bold">{item.date}</div>
                <br />
                <div>{item.text}</div>
              </InViewWrapper>
            </div>
          );
        })}
      </div>
    </Background2>
  );
}
