import { HttpStatusCode } from "axios";
import JsonUtil from "@/app/core/utils/json";
import { WhitelistModel } from "@/app/core/models/whitelist-model";

const { get } = new JsonUtil<WhitelistModel>("whitelist")

export const GET = async (req: Request, { params }: { params: { name: string } }) => {
  try {
    const name = params.name;
    const result = await get();
    const data = result.find((item) => item.name.toLowerCase().trim() === name.toLowerCase().trim());
    return Response.json({
      data,
    });
  } catch (error) {
    return Response.json({
      error,
    }, { status: HttpStatusCode.InternalServerError, });
  }

}