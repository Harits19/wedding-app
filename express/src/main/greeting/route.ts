import express from "express";
import { getAll, insert } from "./repository";
import { printResponse } from "../../core/express/response";
import { GreetingValidator } from "./model";

export const greetingRoute = () => {
  const route = express.Router();

  route.get("", async (req, res, next) => {
    try {
      const result = await getAll();
      return printResponse(res, result);
    } catch (error) {
      next(error);
    }
  });

  route.post("", async (request, res, next) => {
    try {
      const body = request.body;

      const greeting = GreetingValidator.parse(body);

      await insert(greeting);

      return printResponse(res, greeting);
    } catch (error) {
      next(error);
    }
  });

  return route;
};
