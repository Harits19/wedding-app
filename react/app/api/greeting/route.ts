"use server";

import { promises as fs } from "fs";
import { GreetingModel, GreetingValidator } from "../../core/models/greeting-model";

const path = process.cwd() + "/app/api/greeting/greeting.json";

const get = async () => {
  const file = await fs.readFile(path, "utf8");

  const result = JSON.parse(file.toString()) as GreetingModel[];
  return result;
}

const replace = async (greeting: GreetingModel) => {
  const greetings = await get();
  greetings.push({
    ...greeting,
    id: new Date().getTime(),
    createdAt: new Date(),
  })
  await fs.writeFile(path, JSON.stringify(greetings))
}



export const GET = async () => {
  try {
    const result = await get()
    return Response.json({
      data: result,
    });
  } catch (error) {
    return Response.json({
      data: [],
    });
  }
};

export const POST = async (req: Request) => {


  try {
    const json = await req.json()
    const body = GreetingValidator.parse(json)
    await replace(body)
    return Response.json({
      data: body,
    });
  } catch (error) {
    return Response.json({
      error,
    });
  }

}