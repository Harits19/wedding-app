import zod from "zod";
import { NextFunction, Request, Response } from "express";
import { env } from "../env/config";

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.get("token");
  const envToken = env.TOKEN;

  if (!token) {
    return response.json({
      message: "empty token value",
    });
  }

  if (token !== envToken) {
    return response.status(400).json({
      message: "wrong token value",
    });
  }
  next();
};
