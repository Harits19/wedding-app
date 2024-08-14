import zod from "zod";

export const GreetingValidator = zod.object({
  name: zod.string(),
  message: zod.string(),
});

export interface GreetingModel extends zod.infer<typeof GreetingValidator> {
  id?: number;
  createdAt?: Date;
}
