export const attendanceTypeList = ["not_sure", "attend", "not_attend"] as const;

export type AttendanceType = (typeof attendanceTypeList)[number];

export interface AttendanceModel {
  id?: number;
  createdAt?: Date;
  name: string;
  attendance: AttendanceType;
  message?: string;
}
