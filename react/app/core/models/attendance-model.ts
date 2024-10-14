import zod from "zod";

export const attendanceTypeList = ["not_sure", "attend", "not_attend"] as const;

export type AttendanceType = (typeof attendanceTypeList)[number];

export const AttendanceValidator = zod.object({
  name: zod.string(),
  attendance: zod.enum(attendanceTypeList),
});

export interface AttendanceModel extends zod.infer<typeof AttendanceValidator> {
  id?: number;
  createdAt?: Date;
}
