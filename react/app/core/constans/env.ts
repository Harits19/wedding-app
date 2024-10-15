export const kEnv = (() => {
  const env = {
    NEXT_PUBLIC_DEVELOPE_MODE: process.env.NEXT_PUBLIC_DEVELOPE_MODE === "true",
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
    NEXT_PUBLIC_APP_PORT: process.env.NEXT_PUBLIC_APP_PORT,
    NEXT_PUBLIC_USE_NEXT_JS_API_ROUTE: process.env.NEXT_PUBLIC_USE_NEXT_JS_API_ROUTE === "true",
  };

  const emptyKey = Object.entries(env).filter((key) => {
    return !key;
  });
  if (emptyKey.length > 0) {
    throw `empty key on ${emptyKey.join(", ")}`;
  }

  return env;
})();
