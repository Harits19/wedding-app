import express from "express";
import { getAll, insert } from "./repository";
import { printResponse } from "../core/express/response";
import { WhitelistArrayValidator } from "./model";
import { verifyToken } from "../core/token/config";

export const whitelistRoute = () => {
  const route = express.Router();

  route.get("", async (req, res, next) => {
    try {
      const result = await getAll();
      return printResponse(res, result);
    } catch (error) {
      next(error);
    }
  });

  route.post("", verifyToken, async (req, res, next) => {
    try {
      const body = await req.body;

      const whitelist = WhitelistArrayValidator.parse(body);

      await insert(whitelist);
      return printResponse(res, whitelist);
    } catch (error) {
      next(error);
    }
  });

  return route;
};
