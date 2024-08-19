import express from "express";
import { getAll } from "./repository";
import { printResponse } from "../express/response";

export const whitelistRoute = () => {
  const route = express.Router();
  route.get("", async (req, res) => {
    const result = await getAll();

    return printResponse(res, result);
  });

  return route;
};
