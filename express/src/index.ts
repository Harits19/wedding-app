import { attendanceRoute } from "./main/attendance/route";
import express, { NextFunction, Request, Response } from "express";
import { whitelistRoute } from "./main/whitelist/route";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./core/swagger/config";
import { env } from "./core/env/config";
import { checkConnection, mysql } from "./core/knex/config";
import * as AttendanceRepository from "./main/attendance/repository";
import * as WhitelistRepository from "./main/whitelist/repository";
import * as GreetingRepository from "./main/greeting/repository";
import { greetingRoute } from "./main/greeting/route";
import cors from "cors";
import { initHttpsServer } from "./core/https/config";

export const serverConfig = () => {
  const port = env.NEXT_PUBLIC_APP_PORT;
  const host = env.NEXT_PUBLIC_APP_HOST;

  return {
    port,
    host,
    info: `Server running at ${host}:${port}`,
  };
};

const startExpress = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

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

  const server = initHttpsServer(app);

  const { host, info, port } = serverConfig();

  (server ?? app).listen(port);
  console.log(`Server running at ${host}:${port}`);
  return app;
};

export const application = (async () => {
  await checkConnection();
  await AttendanceRepository.initialize();
  await WhitelistRepository.initialize();
  await GreetingRepository.initialize();
  return startExpress();
})();

const gracefulShutdown = () => {
  mysql
    .destroy()
    .catch(() => {})
    .then(() => process.exit());
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("SIGUSR2", gracefulShutdown); // Sent by nodemon
