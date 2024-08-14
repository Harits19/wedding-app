import { WhitelistRepository } from "@/app/core/repository/whitelist-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";

export const GET = (
  _: Request,
  { params }: { params: { name: string } },
) => {
  const name = params.name;
  return ResponseUtil.json({
    errorMessage: `Failed to find name ${name}`,
    callback: async () => {
      const result = await WhitelistRepository.findByName(name);
      return {
        message: "Success",
        data: result,
      };
    },
  });
};
