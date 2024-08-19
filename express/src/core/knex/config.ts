import { Knex, knex } from "knex";
import { env } from "../env/config";

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    port: 3306,
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_ROOT_PASSWORD,
    database: env.MYSQL_DATABASE,
  },
};

export const mysql = knex(config);

export const checkConnection = async () => {
  try {
    await mysql.raw("SELECT 1");
    console.log("mysql connected");
  } catch (error) {
    console.error("mysql not connected");
    console.error(error);
  }
};

export const initTable = async (
  tableName: string,
  createTableCallback: (table: Knex.CreateTableBuilder) => void
) => {
  try {
    const result = await mysql.schema.createTable(
      tableName,
      createTableCallback
    );
    console.log(`success initialize ${tableName} table ${result}`);
  } catch (error: any) {
    const code = error?.code;
    if (code === "ER_TABLE_EXISTS_ERROR") {
      return;
    }
    console.error("error when create table", error);
  }
};
