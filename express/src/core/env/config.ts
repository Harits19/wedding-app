import dotenv from "dotenv";
import path from "path";

const envPath = path.join("../.env");

console.log({ envPath });

dotenv.config({
  path: envPath,
});

const envList = [
  "MYSQL_ROOT_PASSWORD",
  "MYSQL_DATABASE",
  "MYSQL_USER",
  "MYSQL_HOST",
  "APP_PORT",
  "APP_HOST",
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
