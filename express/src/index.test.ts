import { application } from ".";
import supertest from "supertest";
import { mysql } from "./core/knex/config";

describe("test src/index.ts", () => {
  it("should response healthy check", async () => {
    const app = await application;
    // const result = await supertest(app).get("/").end();
    // expect(result.body).toEqual("Healthy Check");
  });
});
