"use server";

import { promises as fs } from "fs";
import { GreetingModel } from "../../core/models/greeting-model";

export const GET = async () => {
  try {
    const file = await fs.readFile(process.cwd() + "/app/api/greeting/greeting.json", "utf8");

    const result = JSON.parse(file.toString()) as GreetingModel[];

    return Response.json({
      data: result,
    });
  } catch (error) {
    return Response.json({
      data: [],
    });
  }
};
