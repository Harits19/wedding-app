import dotenv from "dotenv";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
dotenv.config({
  path: !isProduction ? path.join("../.env") : path.join(".env"),
});

const envList = [
  "MYSQL_ROOT_PASSWORD",
  "MYSQL_DATABASE",
  "MYSQL_USER",
  "MYSQL_HOST",
  "NEXT_PUBLIC_APP_PORT",
  "NEXT_PUBLIC_APP_HOST",
  "TOKEN",
] as const;

type EnvType = (typeof envList)[number];

type EnvValue = Record<EnvType, string>;

export const env = (() => {
  const env: Partial<EnvValue> = {};
  for (const key of envList) {
    const detectedValue = process.env[key];

    if (!detectedValue) {
      throw new Error(`Empty value on key ${key}`);
    }
    env[key] = detectedValue;
  }
  return env as EnvValue;
})();
