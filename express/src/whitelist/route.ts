import express from "express";
import { getAll } from "./repository";

export const whitelistRoute = () => {
  const route = express.Router();
  route.get("", async (req, res) => {
    // const result = await getAll();
    const result = [1,1,1,1,1,].map((item, index) => ({
      name: 'Name ' + index
    }))

    res.json(result);
  });

  return route;
};
