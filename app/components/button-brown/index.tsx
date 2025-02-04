import { ReactNode } from "react";

export default function ButtonBrown({
  onClick,
  children,
  className,
  isLoading = false,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`border border-none bg-wedprimary-color text-white px-3 py-1 font-cardo rounded-lg flex flex-row items-center gap-x-2 ${className ?? ""}`}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
}
