"use server";

import { HttpStatusCode } from "axios";
import JsonUtil from "@/app/core/utils/json";
import { AttendanceModel, AttendanceValidator } from "@/app/core/models/attendance-model";

const { get, insert } = new JsonUtil<AttendanceModel>("attendance")


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
    const body = AttendanceValidator.parse(json)

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
