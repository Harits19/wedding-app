import express from "express";
import { getAll } from "./repository";

export const whitelistRoute = () => {
  const route = express.Router();
  route.get("", async (req, res) => {
    const result = await getAll();

    res.json(result);
  });

  return route;
};
