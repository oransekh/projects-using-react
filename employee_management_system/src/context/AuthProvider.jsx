import React from "react";
import { useState, createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ admin: null, employees: null });

  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
