import zod from "zod";
import { kEnv } from "../constans/env";

export const checkToken = (request: Request) => {
  const headerToken = request.headers.get("token");
  const envToken = kEnv.TOKEN;

  const { token } = zod
    .object({
      token: zod.string(),
    })
    .parse({ token: headerToken });

  if (token !== envToken) {
    throw new Error("wrong token value");
  }
};
