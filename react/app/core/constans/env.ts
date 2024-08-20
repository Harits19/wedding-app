export const kEnv = (() => {
  const env = {
    DEVELOPE_MODE: true,
  };

  const emptyKey = Object.entries(env).filter((key) => {
    return !key;
  });
  if (emptyKey.length > 0) {
    throw `empty key on ${emptyKey.join(", ")}`;
  }

  return env;
})();
