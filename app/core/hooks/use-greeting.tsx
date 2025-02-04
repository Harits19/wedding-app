import { GreetingModel } from "../models/greeting-model";
import { useGetAndPostMethod } from "./use-get-post-method";

export const useGreeting = () => {
  return useGetAndPostMethod<GreetingModel>({
    url: "/greeting",
  });
};
