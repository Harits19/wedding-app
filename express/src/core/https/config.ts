import { readFileSync } from "fs";
import path from "path";
import https from "https";
import { Express } from "express";

export const initHttpsServer = (app: Express) => {
  const isProduction = process.env.NODE_ENV === "production";
  const keyPath = !isProduction
    ? path.join("../harits-fia.key")
    : path.join("harits-fia.key");
  const certPath = !isProduction
    ? path.join("../harits-fia.my.id.crt")
    : path.join("harits-fia.my.id.crt");

  console.log({ keyPath, certPath });

  const key = readFileSync(keyPath);
  const cert = readFileSync(certPath);
  const options = {
    key: key,
    cert: cert,
  };

  const server = https.createServer(options, app);

  return server;
};
