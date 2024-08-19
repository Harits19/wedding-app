import express from "express";
import { getAll, insert } from "./repository";
import { printResponse } from "../express/response";
import { AttendanceValidator } from "./model";

export const attendanceRoute = () => {
  const route = express.Router();
  route.get("", async (req, res) => {
    const result = await getAll();
    return printResponse(res, result);
  });

  route.post("", async (req, res) => {
    const body = req.body;

    const attendance = AttendanceValidator.parse(body);

    await insert(attendance);

    return printResponse(res, attendance);
  });

  return route;
};
