import { AttendanceModel } from "../models/attendance-model";
import { useGetAndPostMethod } from "./use-get-post-method";

export const useAttendance = () => {
  return useGetAndPostMethod<AttendanceModel>({
    url: "/attendance",
  });
};
