import React, { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <AccountContext.Provider
      value={{
        user,
        setUser,
      }}
    ></AccountContext.Provider>
  );
};
