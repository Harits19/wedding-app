import { useEffect, useMemo, useState } from "react";
import { timeBetweenDates } from "../utils/date-util";

export const useTimeBetween = (value: Date) => {
  const date = useMemo(() => {
    return value;
  }, [value]);
  const [diff, setDiff] = useState(timeBetweenDates(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(timeBetweenDates(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return diff;
};
