import { initTable, mysql } from "../../core/knex/config";
import { GreetingModel } from "./model";

const tableName = "greeting";
const db = mysql;
export async function initialize() {
  await initTable(tableName, (table) => {
    table.increments("id");
    table.string("name");
    table.string("message");
    table.timestamp("createdAt");
  });
}

export async function insert(value: GreetingModel) {
  const result = await db.table(tableName).insert({
    ...value,
    createdAt: new Date(),
  });
  console.log("success insert greeting table", result);
}

export async function getAll(): Promise<GreetingModel[]> {
  const result = await db.table(tableName).select();
  console.log("success select greeting table");
  return result;
}
