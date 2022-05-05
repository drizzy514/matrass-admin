import { createContext, useEffect, useState } from "react";

const Auth = createContext();

function Provider({ children }) {
  const [token, setToken] = useState(
    window.localStorage.getItem("hibro")
  );

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("hibro", token);
    } else {
      window.localStorage.removeItem("hibro");
    }
  }, [token]);

  return <Auth.Provider value={{ token, setToken }}>{children}</Auth.Provider>;
}

export { Auth, Provider };
