import { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return <div className={`w-mobile h-fit bg-green-300`}>{children}</div>;
}
