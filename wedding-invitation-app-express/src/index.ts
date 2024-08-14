import express, { Request, Response } from "express";
import { whitelistRoute } from "./whitelist/route";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy Check");
});

app.use("/whitelist", whitelistRoute());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
