import { Knex } from "knex";
import { knexConnectionV2 } from "../config/knex";

export abstract class BaseRepository {
  knex?: Knex;

  constructor() {
    this.knex = knexConnectionV2();
  }

  initialize() {}
}
