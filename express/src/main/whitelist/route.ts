import express from "express";
import { deleteById, getAll, insert, update } from "./repository";
import { printResponse } from "../../core/express/response";
import { WhitelistArrayValidator, WhitelistValidator } from "./model";
import { verifyToken } from "../../core/token/config";

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
      const body = req.body;

      const whitelist = WhitelistArrayValidator.parse(body);

      await insert(whitelist);
      return printResponse(res, whitelist);
    } catch (error) {
      next(error);
    }
  });

  route.delete("/:id", verifyToken, async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      await deleteById(id);
      return printResponse(res, id);
    } catch (error) {
      next(error);
    }
  });

  route.put("/:id", verifyToken, async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const body = req.body;

      const whitelist = WhitelistValidator.parse(body);

      await update({ ...whitelist, id });

      return printResponse(res, whitelist);
    } catch (error) {
      next(error);
    }
  });

  return route;
};
