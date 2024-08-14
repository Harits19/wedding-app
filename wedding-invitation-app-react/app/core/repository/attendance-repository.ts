import { initTable, knexConnection } from "../config/knex";
import {
  attendanceTypeList,
  AttendanceModel,
} from "../models/attendance-model";

export class AttendanceRepository {
  static tableName = "attendance";
  static async initialize() {
    await initTable(AttendanceRepository.tableName, (table) => {
      table.increments("id");
      table.string("name");
      table.enum("attendance", attendanceTypeList);
      table.timestamp("createdAt");
    });
  }

  static async insert(value: AttendanceModel) {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(AttendanceRepository.tableName).insert({
          ...value,
          createdAt: new Date(),
        });
        console.log("success insert attendance table", result);
      },
    });
  }

  static async getAll() {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(AttendanceRepository.tableName).select();
        console.log("success select attendance table");
        return result;
      },
    });
  }
}
