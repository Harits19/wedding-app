import { initTable, knexConnection } from "../config/knex";
import { GreetingModel } from "../models/greeting-model";

export class GreetingRepository {
  static tableName = "greeting";
  static async initialize() {
    await initTable(GreetingRepository.tableName, (table) => {
      table.increments("id");
      table.string("name");
      table.string("message");
      table.timestamp("createdAt");
    });
  }

  static async insert(value: GreetingModel) {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(GreetingRepository.tableName).insert({
          ...value,
          createdAt: new Date(),
        });
        console.log("success insert greeting table", result);
      },
    });
  }

  static async getAll(): Promise<GreetingModel[]> {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(GreetingRepository.tableName).select();
        console.log("success select greeting table");
        return result;
      },
    });
  }
}
