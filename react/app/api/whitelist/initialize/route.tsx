import { WhitelistRepository } from "@/app/core/repository/whitelist-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";

export const GET = () => {
  return ResponseUtil.responseInitTable({
    tableName: WhitelistRepository.tableName,
    runInitDatabase: WhitelistRepository.initialize,
  });
};
