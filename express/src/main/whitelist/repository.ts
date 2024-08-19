import { initTable, mysql } from "../../core/knex/config";
import { WhitelistModel } from "./model";

const tableName = "whitelist";
const db = mysql;

export const initialize = async () => {
  await initTable(tableName, (table) => {
    table.increments("id");
    table.string("name");
    table.date("createdAt");
  });
};

export const getAll = async () => {
  const result: WhitelistModel[] = await db.table(tableName).select();
  return result;
};

export const findByName = async (name: string) => {
  const result: WhitelistModel = await db
    .table(tableName)
    .where({
      name,
    })
    .select()
    .first();

  if (!result) {
    throw new Error(`${name} not found`);
  }
  return result;
};

export const insert = async (value: Partial<WhitelistModel>[]) => {
  await db.table(tableName).insert(
    value.map((item) => ({
      ...item,
      createdAt: new Date(),
    }))
  );
};

export const update = async (
  value: Partial<WhitelistModel> & { id: number }
) => {
  const result = await db
    .table(tableName)
    .where({ id: value.id })
    .update(value);
  console.log("success update whitelist table", result);
};

export const deleteById = async (id: number) => {
  const result = await db
    .table(tableName)
    .where({
      id,
    })
    .del();
  console.log("result delete", result);
  if (result === 0) {
    throw new Error(`id ${id} doesn't exist`);
  }
};
