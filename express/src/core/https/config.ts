import { readFileSync } from "fs";
import path from "path";
import https from "https";
import { Express } from "express";

export const initHttpsServer = (app: Express) => {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    const keyPath = !isProduction
      ? path.join("../ssl.key")
      : path.join("ssl.key");
    const certPath = !isProduction
      ? path.join("../ssl.crt")
      : path.join("ssl.crt");

    console.log({ keyPath, certPath });

    const key = readFileSync(keyPath);
    const cert = readFileSync(certPath);
    const options = {
      key: key,
      cert: cert,
    };

    const server = https.createServer(options, app);

    return server;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
