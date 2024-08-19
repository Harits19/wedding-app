import { initTable, knexConnection } from "../config/knex";
import { WhitelistModel } from "../models/whitelist-model";

export class WhitelistRepository {
  static tableName = "whitelist";
  static async initialize() {
    await initTable(WhitelistRepository.tableName, (table) => {
      table.increments("id");
      table.string("name");
    });

    try {
      await knexConnection({
        callback: async (db) => {
          await db.schema.alterTable(WhitelistRepository.tableName, (table) => {
            table.date("createdAt");
          });
        },
      });
    } catch (error) {
      console.log("error when alter table", error);
    }
  }

  static async getAll() {
    return knexConnection({
      callback: async (db) => {
        const result: WhitelistModel[] = await db
          .table(WhitelistRepository.tableName)
          .select();
        return result;
      },
    });
  }

  static async findByName(name: string) {
    return knexConnection({
      callback: async (db) => {
        const result: WhitelistModel = await db
          .table(WhitelistRepository.tableName)
          .where({
            name,
          })
          .select()
          .first();
        return result;
      },
    });
  }

  static async insert(value: Partial<WhitelistModel>[]) {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(WhitelistRepository.tableName).insert(
          value.map((item) => ({
            ...item,
            createdAt: new Date(),
          })),
        );
        console.log("success insert whitelist table", result);
      },
    });
  }

  static async update(value: Partial<WhitelistModel> & { id: number }) {
    return knexConnection({
      callback: async (db) => {
        const result = await db
          .table(WhitelistRepository.tableName)
          .where({ id: value.id })
          .update(value);
        console.log("success update whitelist table", result);
      },
    });
  }

  static async delete(id: number) {
    return knexConnection({
      callback: async (db) => {
        await db
          .table(WhitelistRepository.tableName)
          .where({
            id,
          })
          .del();
      },
    });
  }
}
