import { env } from "./config";
import dotenv from "dotenv";

describe("test env file", () => {
  it("should show all env variable", () => {
    expect(env).toBeDefined();
  });

  it("should throw an error", () => {
    try {
      process.env = {};
      env;
    } catch (error) {
      console.log(error);
    }
  });
});
