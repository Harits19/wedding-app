import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "better-sqlite3",
  connection: {
    filename: "./database",
  },
  useNullAsDefault: true,
};

export const knexConnection = knex(config);

export const initTable = async ({
  tableName,
  createTableCallback,
}: {
  tableName: string;
  createTableCallback: (table: Knex.CreateTableBuilder) => void;
}) => {
  try {
    const result = await knexConnection.schema.createTable(
      tableName,
      createTableCallback
    );
    console.log(`success initialize ${tableName} table ${result}`);
  } catch (error) {
    console.error("error when create table", error);
  }
};
