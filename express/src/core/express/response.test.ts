import { printResponse } from "./response";
import { Response } from "express";

describe("test print response method", () => {
  it("it should print response with json format", () => {
    const res = {
      json: () => {},
    } as Response;
    printResponse(res, { message: "success" });
  });
});
