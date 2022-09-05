import { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
