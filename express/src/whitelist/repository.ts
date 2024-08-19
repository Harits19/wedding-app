import { initTable, mysql } from "../knex/config";
import { WhitelistModel } from "./model";

const tableName = "whitelist";
const db = mysql;

export const initialize = async () => {
  await initTable({
    tableName: tableName,
    createTableCallback: (table) => {
      table.increments("id");
      table.string("name");
    },
  });

  try {
    await mysql.schema.alterTable(tableName, (table) => {
      table.date("createdAt");
    });
  } catch (error) {
    console.log("error when alter table", error);
  }
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
  await db
    .table(tableName)
    .where({
      id,
    })
    .del();
};
