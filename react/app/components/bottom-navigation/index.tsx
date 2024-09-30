import { listMainMenu } from "@/app/contanst";

export default function BottomNavigation() {
  return (
    <div className="flex flex-row gap-x-2 p-4 rounded-xl bg-wedprimary-color">
      {listMainMenu.map(({ icon: Icon, key }) => (
        <Icon
          color="white"
          onClick={() => {
            document
              .getElementById(key)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          size={24}
          key={key}
        />
      ))}
    </div>
  );
}
