import { useWeddingState } from "@/app/core/hooks/use-wedding-provider";
import { FaArrowUp, FaMicrophoneAltSlash, FaMusic } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export default function MusicControl() {
  const { musicIsPlaying, setMusicIsPlaying, scrollToTop } = useWeddingState();
  const IconControl = musicIsPlaying ? FaMusic : FaMicrophoneAltSlash;
  const IconButton = ({
    iconType: RenderIconType,
    onClick,
  }: {
    iconType: IconType;
    onClick: () => void;
  }) => (
    <div className="border-2 border-#wedE97777C7 bg-white rounded p-1 flex flex-col h-min">
      <RenderIconType
        className=" text-[16px]  text-#wedE97777C7"
        onClick={onClick}
      />
    </div>
  );
  return (
    <div className="gap-y-4 flex flex-col">
      <IconButton
        iconType={IconControl}
        onClick={() => {
          setMusicIsPlaying(!musicIsPlaying);
        }}
      />
      <IconButton
        iconType={FaArrowUp}
        onClick={() => {
          scrollToTop();
        }}
      />
    </div>
  );
}
