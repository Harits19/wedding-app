import express, { Request, Response } from "express";
import { whitelistRoute } from "./whitelist/route";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./swagger/config";

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy Check");
});

app.use("/whitelist", whitelistRoute());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
