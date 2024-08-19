import { initTable, mysql } from "../knex/config";
import { AttendanceModel, attendanceTypeList } from "./model";

const tableName = "attendance";
const db = mysql;
export async function initialize() {
  await initTable(tableName, (table) => {
    table.increments("id");
    table.string("name");
    table.enum("attendance", attendanceTypeList);
    table.timestamp("createdAt");
  });
}

export async function insert(value: AttendanceModel) {
  const result = await db.table(tableName).insert({
    ...value,
    createdAt: new Date(),
  });
  console.log("success insert attendance table", result);
}

export async function getAll() {
  const result = await db.table(tableName).select();
  console.log("success select attendance table");
  return result;
}
