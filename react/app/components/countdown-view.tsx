import { useTimeBetween } from "../core/hooks/use-time-between";

export default function CountdownView({
  date,
  title,
}: {
  date: Date;
  title?: string;
}) {
  const diff = useTimeBetween(date);

  return (
    <>
      <div className="text-lg font-gallery w-fit bg-white px-4 rounded-full mb-3 shadow">{title}</div>
      <div className="flex flex-row items-center w-full font-cardo text-white gap-x-2 justify-center mb-8">
        {Object.entries(diff).map((item, index) => {
          const title = {
            hours: "Jam",
            seconds: "Detik",
            days: "Hari",
            minutes: "Menit",
          }[item[0]];
          return (
            <div
              key={index}
              className="bg-wedprimary-color flex flex-col w-16 h-16 justify-center items-center rounded-md"
            >
              <div>{item[1]}</div>
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
