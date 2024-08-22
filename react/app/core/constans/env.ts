import path from "path";
import dotenv from "dotenv";

const envPath = path.join("../.env");
const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
  dotenv.config({
    path: envPath,
  });
}

export const kEnv = (() => {
  const env = {
    DEVELOPE_MODE: true,
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
  };

  const emptyKey = Object.entries(env).filter((key) => {
    return !key;
  });
  if (emptyKey.length > 0) {
    throw `empty key on ${emptyKey.join(", ")}`;
  }

  return env;
})();
