"use server";

import { HttpStatusCode } from "axios";
import { GreetingModel, GreetingValidator } from "../../core/models/greeting-model";
import JsonUtil from "@/app/core/utils/json";

const { get, insert } = new JsonUtil<GreetingModel>("greeting")


export const GET = async () => {
  try {
    const result = await get()
    return Response.json({
      data: result,
    });
  } catch (error) {
    return Response.json({
      error,
    }, { status: HttpStatusCode.InternalServerError, });
  }
};

export const POST = async (req: Request) => {


  try {
    const json = await req.json()
    const body = GreetingValidator.parse(json)

    await insert(body)
    return Response.json({
      data: body,
    });
  } catch (error) {
    return Response.json({
      error,
    }, { status: HttpStatusCode.InternalServerError, });
  }
}
