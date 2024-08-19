import { attendanceRoute } from "./attendance/route";
import express, { Request, Response } from "express";
import { whitelistRoute } from "./whitelist/route";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./swagger/config";
import { env } from "./env/config";
import { checkConnection, mysql } from "./knex/config";
import { initialize } from "./attendance/repository";

const startExpress = () => {
  const app = express();

  app.use(express.json());

  const port = env.APP_PORT;
  const host = env.APP_HOST;

  app.get("/", (req: Request, res: Response) => {
    res.send("Healthy Check");
  });

  app.use("/whitelist", whitelistRoute());
  app.use("/attendance", attendanceRoute());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
  });
};

(async () => {
  await checkConnection();
  await initialize();
  startExpress();
})();
