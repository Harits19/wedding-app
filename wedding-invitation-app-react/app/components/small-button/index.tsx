import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function SmallButton({
  onClick,
  title,
  icon,
  className,
}: {
  title: string;
  onClick: () => void;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label="small button"
      onClick={onClick}
      className={twMerge(
        "px-4 gap-x-2 my-1 py-1 rounded-xl text-[10px] bg-wedE97777C7 flex flex-row items-center justify-center text-white text-sm",
        className,
      )}
    >
      {icon}
      <div className="text-[10px]">{title}</div>
    </button>
  );
}
