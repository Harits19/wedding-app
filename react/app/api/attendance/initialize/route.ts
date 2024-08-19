import { AttendanceRepository } from "@/app/core/repository/attendance-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when initialize attendance database",
    callback: async () => {
      console.log("start initialize database");
      await AttendanceRepository.initialize();
      return {
        message: "success create attendance database",
      };
    },
  });
};
