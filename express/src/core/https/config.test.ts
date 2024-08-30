import fs, { readFileSync } from "fs";
import { initHttpsServer } from "./config";
import express from "express";
describe("it should production", () => {
  it("should read ssl key and crt", () => {
    process.env.NODE_ENV = "asdasd";
    const readFileSyncMock = jest
      .spyOn(fs, "readFileSync")
      .mockImplementation();
    const app = jest.mocked(express());
    initHttpsServer(app);
  });
});
