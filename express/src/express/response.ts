import { Response } from "express";

export const printResponse = <T extends Object>(res: Response, data: T) => {
  return res.json({
    data: data,
  });
};
