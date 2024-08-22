import { attendanceRoute } from "./main/attendance/route";
import express, { NextFunction, Request, Response } from "express";
import { whitelistRoute } from "./main/whitelist/route";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./core/swagger/config";
import { env } from "./core/env/config";
import { checkConnection } from "./core/knex/config";
import * as AttendanceRepository from "./main/attendance/repository";
import * as WhitelistRepository from "./main/whitelist/repository";
import * as GreetingRepository from "./main/greeting/repository";
import { greetingRoute } from "./main/greeting/route";
import cors from "cors";

const startExpress = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  const port = env.NEXT_PUBLIC_APP_PORT;
  const host = env.NEXT_PUBLIC_APP_HOST;

  app.get("/", (req: Request, res: Response) => {
    res.send("Healthy Check");
  });

  app.use("/whitelist", whitelistRoute());
  app.use("/attendance", attendanceRoute());
  app.use("/greeting", greetingRoute());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  function errorHandler(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res
      .status(500)
      .json({ message: error?.message || "Internal Server Error", error });
  }

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
  });
};

(async () => {
  await checkConnection();
  await AttendanceRepository.initialize();
  await WhitelistRepository.initialize();
  await GreetingRepository.initialize();
  startExpress();
})();
