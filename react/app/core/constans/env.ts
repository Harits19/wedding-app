export const kEnv = (() => {
  const env = {
    DEVELOPE_MODE: true,
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
    NEXT_PUBLIC_APP_PORT: process.env.NEXT_PUBLIC_APP_PORT,
  };

  const emptyKey = Object.entries(env).filter((key) => {
    return !key;
  });
  if (emptyKey.length > 0) {
    throw `empty key on ${emptyKey.join(", ")}`;
  }

  return env;
})();
