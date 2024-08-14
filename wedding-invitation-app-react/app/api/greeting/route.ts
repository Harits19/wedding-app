import { GreetingValidator } from "@/app/core/models/greeting-model";
import { GreetingRepository } from "@/app/core/repository/greeting-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of greeting",
    callback: async () => {
      const result = await GreetingRepository.getAll();
      return {
        message: "success get data",
        data: result,
      };
    },
  });
};

export const POST = async (request: Request) => {
  return ResponseUtil.json({
    errorMessage: "Error when post greeting",
    callback: async () => {
      const body = await request.json();

      const greeting = GreetingValidator.parse(body);

      await GreetingRepository.insert(greeting);

      return {
        message: "Success post greeting model",
        data: greeting,
      };
    },
  });
};
