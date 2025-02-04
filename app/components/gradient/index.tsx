export default function Gradient({
  position = "top",
}: {
  position?: "top" | "bottom";
}) {
  const isTop = position === "top";

  return (
    <div
      className={` absolute ${isTop ? "top-0" : "bottom-0 rotate-180"} w-full z-auto left-0 right-0`}
    >
      {/* <div className="h-8 bg-white w-full " /> */}
      <div className="bg-gradient-to-b h-40 from-white to-transparent" />
    </div>
  );
}
