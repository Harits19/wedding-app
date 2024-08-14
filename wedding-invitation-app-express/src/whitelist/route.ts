import express from "express";

export const whitelistRoute = () => {
  const route = express.Router();
  route.get("", (req, res) => {
    return res.json({
      message: "success",
    });
  });

  return route;
};
