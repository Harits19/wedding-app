import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "better-sqlite3",
  connection: {
    filename: "./database",
  },
  useNullAsDefault: true,
};

export const knexConnectionV2 = () => knex(config);
export const knexConnection = async <T>({
  callback,
}: {
  // eslint-disable-next-line no-unused-vars
  callback(db: Knex): Promise<T>;
}) => {
  const connection = knex(config);

  try {
    const result = await callback(connection);
    return result;
  } finally {
    await connection.destroy();
  }
};

export const initTable = async (
  tableName: string,
  // eslint-disable-next-line no-unused-vars
  createTableCallback: (table: Knex.CreateTableBuilder) => void,
) => {
  return knexConnection({
    callback: async (db) => {
      try {
        const result = await db.schema.createTable(
          tableName,
          createTableCallback,
        );
        console.log(`success initialize ${tableName} table ${result}`);
      } catch (error) {
        console.error("error when create table", error);
      }
    },
  });
};
