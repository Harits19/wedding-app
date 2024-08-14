import zod from "zod";

export const WhitelistValidator = zod.object({
  name: zod.string(),
});

export const WhitelistArrayValidator = zod.array(WhitelistValidator);

export interface WhitelistModel extends zod.infer<typeof WhitelistValidator> {
  createdAt: Date;
  id: number;
}
