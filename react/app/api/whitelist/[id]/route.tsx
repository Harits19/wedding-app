import { WhitelistValidator } from "@/app/core/models/whitelist-model";
import { WhitelistRepository } from "@/app/core/repository/whitelist-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";
import { checkToken } from "@/app/core/utils/token";

export const DELETE = (
  request: Request,
  { params }: { params: { id: string } },
) => {
  return ResponseUtil.json({
    errorMessage: `Failed to delete id ${params.id}`,
    callback: async () => {
      checkToken(request);
      const id = Number(params.id);
      await WhitelistRepository.delete(id);
      return {
        message: "Success",
        data: id,
      };
    },
  });
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  return ResponseUtil.json({
    errorMessage: "Error when post whitelist",
    callback: async () => {
      checkToken(request);
      const id = Number(params.id);

      const body = await request.json();

      const whitelist = WhitelistValidator.parse(body);

      await WhitelistRepository.update({ ...whitelist, id });

      return {
        message: "Success post whitelist model",
        data: whitelist,
      };
    },
  });
};
