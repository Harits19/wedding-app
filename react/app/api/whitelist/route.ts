import JsonUtil from "@/app/core/utils/json";


const { get } = new JsonUtil("/whitelist")

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