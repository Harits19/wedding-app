"use server";

import { HttpStatusCode } from "axios";
import JsonUtil from "@/app/core/utils/json";
import { WhitelistModel } from "@/app/core/models/whitelist-model";

const { get } = new JsonUtil<WhitelistModel>("whitelist");

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

