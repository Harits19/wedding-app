"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface TokenState {
  token?: string;
  // eslint-disable-next-line no-unused-vars
  setToken: (newValue: string) => void;
  isEmpty: boolean;
}

export const TokenContext = createContext<TokenState>({
  setToken: () => {},
  isEmpty: true,
});

export const useTokenState = () => useContext(TokenContext);

export const TokenProvider = (props: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        isEmpty: !token,
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
