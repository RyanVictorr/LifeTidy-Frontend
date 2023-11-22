import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [sideBarIsActive, setSideBarIsActive] = useState(false);

  // Carregar token e nome do usuário do localStorage no carregamento inicial
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  // Definir token e nome do usuário no localStorage
  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
  }, [token, userName]);

  // Função para realizar o logout
  const logout = () => {
    setUserName("");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        token,
        setToken,
        logout,
        sideBarIsActive,
        setSideBarIsActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
