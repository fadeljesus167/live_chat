import { useState, useEffect } from "react";

export const useSession = () => {
  const [sessionToken, setSessionTokenState] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      setSessionTokenState(token);
    }
  }, []);

  const setSessionToken = (token: string) => {
    localStorage.setItem("sessionToken", token);
    setSessionTokenState(token);
  };

  const clearSessionToken = () => {
    localStorage.removeItem("sessionToken");
    setSessionTokenState(null);
  };

  const searchToken = () => {
    const token = localStorage.getItem("sessionToken");

    return token;
  }

  return {
    sessionToken,
    setSessionToken,
    clearSessionToken,
    searchToken
  };
};
