// Em um arquivo de contexto (por exemplo, AuthContext.js)
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
    setUserName(null); // Certifique-se de limpar o userName ao fazer logout
  };
  const setAuthenticatedUser = (name) => {
    setUserName(name);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        login,
        logout,
        userName,
        setUserName,
        setAuthenticatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
