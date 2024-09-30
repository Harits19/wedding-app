import { listMainMenu } from "@/app/contanst";
import { splitToChunk } from "@/app/core/utils/array";

export default function BottomNavigation() {
  const chunkSize = 3;
  const splittedMenu = splitToChunk(chunkSize, listMainMenu);
  return (
    <div className="flex w-full overflow-x-scroll flex-row gap-x-2 p-4 bg-white shadow-smw">
      {splittedMenu.map((item, index) => (
        <div className="flex flex-row min-w-full" key={index}>
          {item.map(({ icon: Icon, key }) => (
            <button
              onClick={() => {
                document
                  .getElementById(key)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="items-center justify-center flex flex-col"
              key={key}
              style={{
                minWidth: `${Math.floor(100 / chunkSize)}%`,
              }}
            >
              <Icon className="text-wedprimary-color" size={24} />
              <div className="text-xs">{key}</div>
            </button>
          ))}
        </div>
      ))}
      {/* <div>
        <div className="w-[1000px] bg-red-200 h-3">aasd</div>
      </div> */}
    </div>
  );
}
